
import {  useCountries } from "./CountryContext"
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import AlphabetSwitcher from "./AlphabetSwitcher";
import filterCountry from "./filterCountry";
export default function CountryPage() {
const {countries} = useCountries();
const {name} = useParams();
const navigate = useNavigate();

const [query, setQuery] = useState("");
 const [filter, setFilter] = useState("");
 const {sortOrder} = useCountries()

const selectedCountry = countries.find(
  (c) =>
    c.name.common.toLowerCase() === name?.toLowerCase()
);

const currencyList = selectedCountry?.currencies
  ? Object.values(selectedCountry.currencies)
  : [];

  const borderCountries = selectedCountry?.borders
  ?.map((borderCode) =>
    countries.find((c) => c.cca3 === borderCode)
  )
  .filter(Boolean);
console.log(borderCountries)
const filteredCountries = useMemo(() => {
  return filterCountry(countries, query, filter, sortOrder);
}, [countries, query, filter, sortOrder]);


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
        <div className="flex">
        <h2 className="text-xl font-bold m-4">Countries</h2>
          <AlphabetSwitcher />
    
</div>
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

    <div
  className="flex-1 p-6 rounded-xl space-y-6"
  style={{
    background: "var(--element)",
    color: "var(--text)",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
  }}
>

  {/* FLAG */}
 <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
  <img
    src={selectedCountry?.flags.svg}
    alt={selectedCountry?.name.common}
    className="max-h-full max-w-full object-contain"
  />
</div>

  {/* TITLE */}
  <h2 className="text-2xl font-bold">
    {selectedCountry?.name.common}
  </h2>

  {/* INFO GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

    <p>
      <strong>Capital:</strong> {selectedCountry?.capital}
    </p>

    <p>
      <strong>Region:</strong> {selectedCountry?.region}
    </p>

    <p>
      <strong>Population:</strong>{" "}
      {selectedCountry?.population?.toLocaleString()}
    </p>

    <p>
      <strong>Landlocked:</strong>{" "}
      {selectedCountry?.landlocked ? "Yes" : "No"}
    </p>

    <p>
      <strong>Car side:</strong> {selectedCountry?.car?.side}
    </p>

    <p>
      <strong>Currency:</strong>{" "}
      {currencyList.length
        ? currencyList.map((c) => c.name).join(", ")
        : "N/A"}
    </p>

  </div>

<div className="pt-4">
  <h3 className="font-semibold mb-3">
    Border Countries
  </h3>

  <div className="flex flex-wrap gap-2">
    {borderCountries && borderCountries.length > 0 ? (
      borderCountries.map((border) => (
        <button
          key={border!.cca3}
          onClick={() =>
            navigate(
              `/country/${border!.name.common.toLowerCase()}`
            )
          }
          className="px-4 py-2 rounded-md text-sm transition hover:scale-105"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            boxShadow:
              "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {border!.name.common}
        </button>
      ))
    ) : (
      <p>No bordering countries</p>
    )}
  </div>
</div>
</div>
    </div>
        </>
    )
}