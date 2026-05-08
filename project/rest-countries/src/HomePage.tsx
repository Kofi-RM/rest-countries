
import TaskBar from "./TaskBar"
import SearchBar from "./SearchBar"

import { useMemo, useState } from "react";
import { useCountries } from "./CountryContext";
import CountryPanel from "./CountryPanel";
import filterCountry from "./filterCountry";
export default function HomePage() {


 const { countries } = useCountries();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
    const {sortOrder} = useCountries();

const filteredCountries = useMemo(() => {
 return filterCountry(countries, query, filter, sortOrder);
}, [countries, query, filter, sortOrder]);

    return (
        <>
        
    <TaskBar/>
    <SearchBar onSearch={setQuery} onRegion={setFilter}/>
    <div className='flex flex-wrap justify-around'>
    {/* <div className="grid grid-cols-3 gap-4 p-4"></div> */}
       {filteredCountries.map((c) => (
        <CountryPanel key = {c.name.common}country={c}/>
        ))}
      </div>
    
    
      
        </>
    )
}