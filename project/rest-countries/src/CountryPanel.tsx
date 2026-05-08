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
        <div onClick={() => seeCountryDetails(country.name.common)}key = {prop.country.name.common}className = "transition hover:scale-105 cursor-pointer bg-white rounded-lg shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] m-4 flex flex-col w-60">
        <img src = {country.flags.svg}></img>
        <div className="m-2 ">
            <h2>{prop.country.name.common}</h2>
            <p className="m-2"><span className="font-medium black">Population: </span> {country.population.toLocaleString()}</p>
             <p className="m-2"><span className="font-medium black">Region: </span> {country.region} </p>
              <p className="m-2"><span className="font-medium black">Capital: </span> {country.capital} </p>
        </div>
        </div>
        </>
    )
}