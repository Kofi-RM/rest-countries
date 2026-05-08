import ThemeContext from "./theme-context"
import TaskBar from "./TaskBar"
import SearchBar from "./SearchBar"

import { useMemo, useState } from "react";
import { useCountries } from "./CountryContext";
import CountryPanel from "./CountryPanel";

export default function HomePage() {

const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark" ))
}

 const { countries } = useCountries();
  const [query, setQuery] = useState("");

  // ⚡ MEMOIZED SEARCH (NO LAG)
  const filteredCountries = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return countries;

    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(q)
    );
  }, [countries, query]);

    return (
        <>
            <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <TaskBar/>
    <SearchBar onSearch={setQuery}/>
    <div className='flex flex-wrap justify-around'>
    {/* <div className="grid grid-cols-3 gap-4 p-4"></div> */}
       {filteredCountries.map((c) => (
        <CountryPanel key = {c.name.common}country={c}/>
        ))}
      </div>
    
    </ThemeContext.Provider>
      
        </>
    )
}