import ThemeContext from "./theme-context"
import TaskBar from "./TaskBar"
import SearchBar from "./SearchBar"

import { useState } from "react";
import CountryPanel from "./CountryPanel";

export default function HomePage() {

const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark" ))
}


    return (
        <>
            <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <TaskBar/>
    <SearchBar/>
    <div className='flex flex-wrap justify-around'>
    <CountryPanel/><CountryPanel/><CountryPanel/><CountryPanel/>
    <CountryPanel/><CountryPanel/><CountryPanel/><CountryPanel/>

    </div>
    
    </ThemeContext.Provider>
      
        </>
    )
}