
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

  <div
  className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-2xl backdrop-blur-md shadow-xl"
  style={{
    backgroundColor: "var(--element)",
    color: "var(--text)",
    boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
  }}
>
  <button
    onClick={pageValues.prevPage}
    disabled={!pageValues.canPrevPage}
    className="px-4 py-2 rounded-lg transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
    style={{
      backgroundColor: "var(--bg)",
      color: "var(--text)",
    }}
  >
    ← Prev
  </button>

  <p className="font-medium whitespace-nowrap">
    Page {pageValues.currentPage} of{" "}
    {pageValues.totalPages}
  </p>

  <button
    onClick={pageValues.nextPage}
    disabled={!pageValues.canNextPage}
    className="px-4 py-2 rounded-lg transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
    style={{
      backgroundColor: "var(--bg)",
      color: "var(--text)",
    }}
  >
    Next →
  </button>
</div>

</div>
      </div>
        </>
    )
}