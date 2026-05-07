import { useState } from 'react'
import ThemeContext from './theme-context'
import './App.css'
import TaskBar from './TaskBar';
function App() {
const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark" ))
}

async function allCountries():Promise<Response> {
  const result = await fetch("  https://restcountries.com/v3.1/all?fields=name,capital,currencies")
  const json = await result.json()
  console.log(json)
  return json;
}
const data = allCountries()
  return (
    <>
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <TaskBar/>

    </ThemeContext.Provider>
      
    </>
  )
}

export default App
