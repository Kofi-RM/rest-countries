import { useContext } from "react";
import ThemeContext from "./ThemeContext";




export default function TaskBar() {

    const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context
    return (
        <>
        <div  style={{
      background: "var(--element)",
      color: "var(--text)",
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    }} className="p-2 flex justify-around taskbar">
      


        <h2>Where in the world?</h2>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode": "Light Mode"}</button>
        </div>      
        </>
    )
}