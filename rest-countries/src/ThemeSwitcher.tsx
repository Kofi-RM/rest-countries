import ThemeContext from "./ThemeContext"
import { useContext } from "react"
export default function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
         <button
  onClick={toggleTheme}
  className="relative w-10 h-10 flex items-center justify-center rounded-full transition"
  style={{
    background: "var(--element)",
    color: "var(--text)",
    boxShadow: "0px 2px 8px var(--shadow)",
  }}
  aria-label="Toggle theme"
>
  {/* 🌙 MOON */}
  <div
    className="absolute transition-all duration-500 ease-in-out"
    style={{
      transform:
        theme === "light"
          ? "rotate(0deg) scale(1)"
          : "rotate(-90deg) scale(0.3)",
      opacity: theme === "light" ? 1 : 0,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
    >
      <path d="M21.64 13.02A9 9 0 1110.98 2.36a7 7 0 0010.66 10.66z" />
    </svg>
  </div>

  {/* ☀️ SUN */}
  <div
    className="absolute transition-all duration-500 ease-in-out"
    style={{
      transform:
        theme === "dark"
          ? "rotate(0deg) scale(1)"
          : "rotate(90deg) scale(0.3)",
      opacity: theme === "dark" ? 1 : 0,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.5l1.2 3.5h-2.4L12 1.5z" />
      <path d="M12 22.5l-1.2-3.5h2.4L12 22.5z" />
      <path d="M1.5 12l3.5-1.2v2.4L1.5 12z" />
      <path d="M22.5 12l-3.5 1.2v-2.4L22.5 12z" />
      <path d="M5.2 5.2l2.5 1.2-1.2 2.5-1.3-3.7z" />
      <path d="M18.8 5.2l-1.3 3.7-1.2-2.5 2.5-1.2z" />
      <path d="M5.2 18.8l1.3-3.7 1.2 2.5-2.5 1.2z" />
      <path d="M18.8 18.8l-2.5-1.2 1.2-2.5 1.3 3.7z" />
    </svg>
  </div>
</button>
    )
}