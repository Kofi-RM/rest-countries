import useDebounce from "./useDebounce"



export default function SearchBar() {

    return (
        <>
            <div className="flex justify-around">
                <input className = "p-2 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"placeholder="Type a country" type="string"></input>
                <select>
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