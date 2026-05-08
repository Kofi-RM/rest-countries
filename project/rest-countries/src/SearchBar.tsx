import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    <div className="flex items-center justify-around p-2">
      {!isEmpty ? <button
  onClick={() => navigate("/")}
  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
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

  Home
</button>: ""}
      
      <input
        onChange={changeInput}
        value={input}
        className="bg-white p-2 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
        placeholder="Type a country"
        type="text"
      />

      <select value = {region} onChange={handleRegionChange}className="bg-white p-3">
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}