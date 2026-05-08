
import TaskBar from "./TaskBar"
import SearchBar from "./SearchBar"

import { useMemo, useState } from "react";
import { useCountries } from "./CountryContext";
import CountryPanel from "./CountryPanel";

export default function HomePage() {


 const { countries } = useCountries();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");


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