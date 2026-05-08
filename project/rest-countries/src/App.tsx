import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ThemeContext from "./ThemeContext";

import HomePage from "./HomePage";
import CountryPage from "./CountryPage";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  // APPLY THEME TO HTML
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
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
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}