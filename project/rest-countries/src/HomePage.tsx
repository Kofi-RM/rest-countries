
import TaskBar from "./TaskBar"
import SearchBar from "./SearchBar"

import { useMemo, useState } from "react";
import { useCountries } from "./CountryContext";
import usePagination from "./usePagination";
import CountryPanel from "./CountryPanel";
import filterCountry from "./filterCountry";
export default function HomePage() {


 const { countries, itemsPerPage} = useCountries();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
    const {sortOrder} = useCountries();
    
const filteredCountries = useMemo(() => {
 return filterCountry(countries, query, filter, sortOrder);
}, [countries, query, filter, sortOrder]);

const pageProps = {itemsPerPage: itemsPerPage, initialPage: 1, totalItems: filteredCountries.length}
const pageValues = usePagination(pageProps)   
return (
        <>
        
    <TaskBar/>
    <SearchBar onSearch={setQuery} onRegion={setFilter}/>
    <div className='flex flex-wrap justify-around'>
   
       {filteredCountries.map((c) => (
        <CountryPanel key = {c.name.common}country={c}/>
        ))}
      </div>
        </>
    )
}