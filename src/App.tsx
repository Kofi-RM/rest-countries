import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ThemeContext from "./ThemeContext";

import HomePage from "./HomePage";
import CountryPage from "./CountryPage";

export default function App() {
  const [theme, setTheme] = useState("dark"); // default theme is dark

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  
  }; // toggle Theme function

 
  useEffect(() => {
   
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]); // Change theme in document root every time theme is toggle

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}>
{/* Wrap ThemeContext to all components */}
      <div
        className="min-h-screen transition-colors duration-300"
        style={{
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/country/:name"
            element={<CountryPage />}
            // Define routes
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}