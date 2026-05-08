import { useState } from 'react'
import ThemeContext from './theme-context'
import './App.css'
import TaskBar from './TaskBar';
import SearchBar from './SearchBar';
import CountryPanel from './CountryPanel';
import CountryPage from './CountryPage';
function App() {
const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark" ))
}



async function allCountries():Promise<Response> {
  const result = await fetch("  https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,landlocked,population,car")
  const json = await result.json()
  console.log(json)
  return json;
}
allCountries().then((data) => {
  console.log(data);

  // const stringified = JSON.stringify(data);

  // console.log(stringified);
});
  return (
    <>
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    {/* <TaskBar/>
    <SearchBar/>
    <div className='flex flex-wrap justify-around'>
    <CountryPanel/><CountryPanel/><CountryPanel/><CountryPanel/>
    <CountryPanel/><CountryPanel/><CountryPanel/><CountryPanel/> */}
    <CountryPage/>
    {/* </div> */}
    
    </ThemeContext.Provider>
      
    </>
  )
}

export default App
