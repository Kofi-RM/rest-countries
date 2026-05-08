import type { Country } from "./CountryType"

type CountryProp = {
    country:Country
}

export default function CountryPanel(prop:CountryProp) {

    return (
        <>
        <div className = "transition hover:scale-105 cursor-pointer bg-white rounded-lg shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] m-4 flex flex-col w-60">
        <img src = {prop.country.flags.svg}></img>
        <div className="m-2 ">
            <h2>{prop.country.name.common}</h2>
            <p className="m-2"><span>Population: {prop.country.population}</span> 200</p>
             <p className="m-2"><span>Region: {prop.country.region}</span> </p>
              <p className="m-2"><span>Capital: {prop.country.capital}</span> </p>
        </div>
        </div>
        </>
    )
}