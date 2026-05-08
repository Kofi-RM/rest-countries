
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

const paginatedCountries = useMemo(() => {
  return filteredCountries.slice(
    pageValues.startIndex,
    pageValues.endIndex + 1
  );
}, [filteredCountries, pageValues.startIndex, pageValues.endIndex]);
return (
        <>
        
    <TaskBar/>
    <SearchBar onSearch={setQuery} onRegion={setFilter}/>
    <div className='flex flex-wrap justify-around'>
   
       {paginatedCountries.map((c) => (
        <CountryPanel key = {c.name.common}country={c}/>
        ))}
        <div className="flex items-center justify-center gap-4 mt-6">

  <button
    onClick={pageValues.prevPage}
    disabled={!pageValues.canPrevPage}
    className="px-4 py-2 rounded shadow disabled:opacity-50"
    style={{
      background: "var(--element)",
      color: "var(--text)",
    }}
  >
    Prev
  </button>

  <p>
    Page {pageValues.currentPage} of {pageValues.totalPages}
  </p>

  <button
    onClick={pageValues.nextPage}
    disabled={!pageValues.canNextPage}
    className="px-4 py-2 rounded shadow disabled:opacity-50"
    style={{
      background: "var(--element)",
      color: "var(--text)",
    }}
  >
    Next
  </button>

</div>
      </div>
        </>
    )
}