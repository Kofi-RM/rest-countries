
import { useCountries } from "./CountryContext"

import { useParams, useNavigate } from "react-router-dom";
export default function CountryPage() {
const {countries} = useCountries();
const {name} = useParams();
const navigate = useNavigate();
const selectedCountry = countries.find(
  (c) =>
    c.name.common.toLowerCase() === name?.toLowerCase()
);

const currencyList = selectedCountry?.currencies
  ? Object.values(selectedCountry.currencies)
  : [];

    return(
        <>
         <div className="min-h-screen bg-gray-100 p-6 flex gap-6">
      
      {/* LEFT: COUNTRY LIST */}
      <div className="w-1/3 bg-white p-4 rounded-xl shadow overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4">Countries</h2>
            <div>nd</div>
            <div>nd</div>
        {countries.map((c, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/country/${c.name.common.toLowerCase()}`)}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded"
          >
            {c.name.common}
          </div>
        ))}
      </div>

      {/* RIGHT: COUNTRY DETAILS */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow">
        
        <img
          src={selectedCountry?.flags.svg}
        //   alt={selected.flags.alt || selected.name.common}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-4">
         {selectedCountry?.name.common}
        </h1>

        {/* <p className="text-gray-600">name</p> */}

        <div className="mt-6 space-y-3 text-gray-700">

          <p>
            <strong>Capital: </strong>{selectedCountry?.capital}
      
          </p>

          <p>
            <strong>Region: </strong>{selectedCountry?.region}
          </p>

          <p>
            <strong>Population: </strong>{selectedCountry?.population}
           
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