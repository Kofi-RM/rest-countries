
import { useCountries } from "./CountryContext"
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function CountryPage() {
const {countries} = useCountries();
const {name} = useParams();
const navigate = useNavigate();

const [query, setQuery] = useState("");
 const [filter, setFilter] = useState("");

const selectedCountry = countries.find(
  (c) =>
    c.name.common.toLowerCase() === name?.toLowerCase()
);

const currencyList = selectedCountry?.currencies
  ? Object.values(selectedCountry.currencies)
  : [];

  
const filteredCountries = useMemo(() => {
  const q = query.toLowerCase().trim();

  return countries.filter((c) => {
    const matchesSearch =
      c.name.common.toLowerCase().includes(q);

    const matchesRegion =
      filter ? c.region === filter : true;

    return matchesSearch && matchesRegion;
  });
}, [countries, query, filter]);


    return(
        <>
        <SearchBar onRegion={setFilter} onSearch={setQuery}/>
         <div style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }}className="min-h-screen bg-gray-100 p-6 flex gap-6">
      
      {/* LEFT: COUNTRY LIST */}
      <div style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }} className="w-1/3 bg-white p-4 rounded-xl shadow overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold m-4">Countries</h2>
          
        {filteredCountries.map((c, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/country/${c.name.common.toLowerCase()}`)}
            className="p-2 cursor-pointer hover:bg-gray-700 rounded"
          >
            <div className="flex">
            {c.name.common}
           <img
    src={c.flags.svg}
    alt={`${c.name.common} flag`}
    className="ml-2 w-8 h-5 object-contain rounded-sm shadow-sm"
  />
          </div>
          </div>
        ))}
      </div>

      {/* RIGHT: COUNTRY DETAILS */}
      <div style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }} className="flex-1 bg-white p-6 rounded-xl shadow">
        
        <img
          src={selectedCountry?.flags.svg}
        alt={selectedCountry?.name.common}
         className="w-full h-64 object-contain rounded-lg bg-gray-50 mb-4"
        />

        <h2 className="text-3xl font-bold m-4">
         {selectedCountry?.name.common}
        </h2>

        {/* <p className="text-gray-600">name</p> */}

        <div className="mt-6 space-y-3 text-gray-700">

          <p>
            <strong>Capital: </strong>{selectedCountry?.capital}
      
          </p>

          <p>
            <strong>Region: </strong>{selectedCountry?.region}
          </p>

          <p>
            <strong>Population: </strong>{selectedCountry?.population.toLocaleString()}
           
          </p>

          <p>
            <strong>Landlocked: </strong>{selectedCountry?.landlocked}
           
          </p>

          <p>
            <strong>Car side: </strong> {selectedCountry?.car.side}
          </p>

          <p>
            <strong>Currency: </strong>
            {currencyList.length
  ? currencyList.map((c) => c.name).join(", ")
  : "N/A"}

          </p>

        </div>
      </div>
    </div>
        </>
    )
}