import { useNavigate } from "react-router-dom"
import type { Country } from "./CountryType"

type CountryProp = {
    country:Country
}

export default function CountryPanel(prop:CountryProp) {
      const navigate = useNavigate();
    const seeCountryDetails = (name:string) => {
        navigate(`/country/${name.toLowerCase()}`)
    }
    const country = prop.country;
    return (
        <>
  <div
    onClick={() =>
      seeCountryDetails(country.name.common)
    }
    key={country.name.common}
    className="transition hover:scale-105 cursor-pointer rounded-lg m-4 flex flex-col w-60 overflow-hidden"
    style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }}
  >
    <img
      src={country.flags.svg}
      className="w-full h-36 object-cover"
    />

    <div className="p-4">
      <h2 className="font-extrabold text-lg mb-4">
        {country.name.common}
      </h2>

      <p className="mb-2">
        <span className="font-semibold">
          Population:
        </span>{" "}
        {country.population.toLocaleString()}
      </p>

      <p className="mb-2">
        <span className="font-semibold">
          Region:
        </span>{" "}
        {country.region}
      </p>

      <p>
        <span className="font-semibold">
          Capital:
        </span>{" "}
        {country.capital?.[0] ?? "N/A"}
      </p>
    </div>
  </div>
</>
    )
}