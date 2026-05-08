import { useContext } from "react";
import ThemeContext from "./theme-context";
export default function TaskBar() {
const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context
    return (
        <>
        <div className="p-2 flex justify-around taskbar">
        <h2>Where in the world?</h2>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode": "Light Mode"}</button>
        </div>      
        </>
    )
}