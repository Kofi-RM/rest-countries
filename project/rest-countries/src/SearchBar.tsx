import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  onSearch: (value: string) => void;
  onRegion: (value:string) => void;
};

export default function SearchBar({ onSearch, onRegion }: Props) {
    const navigate = useNavigate();
    const params = useParams();
const isEmpty = Object.keys(params).length === 0;

    const delay = 100;
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const debouncedInput = useDebounce({
    input,
    delay,
  });

  
  // ⚡ send debounced value upward
  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);

  useEffect(() => {
    onRegion(region)
  },[region, onRegion])
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setRegion(e.target.value);
};
  return (
    
    <div  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4">

  {/* LEFT: HOME BUTTON */}
  <div>
  {!isEmpty && (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg shadow transition hover:scale-105"
      style={{
        background: "var(--element)",
        color: "var(--text)",
        boxShadow: "0px 2px 8px var(--shadow)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5L12 3l9 7.5M5.25 9.75V21h13.5V9.75"
        />
      </svg>

      <span className="font-semibold">
        Home
      </span>
    </button>
  )}
</div>


  <div className="flex gap-4 items-center">

    <input
      value={input}
      onChange={changeInput}
      placeholder="Search for a country..."
      type="text"
      className="w-full md:w-96 px-5 py-3 rounded-md outline-none"
      style={{
        background: "var(--element)",
        color: "var(--text)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
      }}
    />

  
    <select
      value={region}
      onChange={handleRegionChange}
      className="w-full md:w-52 px-4 py-3 rounded-md outline-none cursor-pointer"
      style={{
        background: "var(--element)",
        color: "var(--text)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>

{!isEmpty && (
<ThemeSwitcher/>
  )}

  </div>
</div>

  );
}