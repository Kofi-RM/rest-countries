import useDebounce from "./useDebounce"



export default function SearchBar() {

    return (
        <>
            <div className="flex items-center justify-around  p-2">
                <input className = "bg-white p-2 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"placeholder="Type a country" type="string"></input>
                <select className="bg-white p-3">
                    <option>Filter by Region</option>
                    <option value = "Africa">Africa</option>
                    <option value = "America">America</option>
                    <option value = "Asia">Asia</option>
                    <option value = "Europe">Europe</option>
                    <option value = "Oceania">Oceania</option>
                </select>
            </div>
        </>
    )

}