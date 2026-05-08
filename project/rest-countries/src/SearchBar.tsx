import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const delay = 600;
  const [input, setInput] = useState("");

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

  return (
    <div className="flex items-center justify-around p-2">
      <input
        onChange={changeInput}
        value={input}
        className="bg-white p-2 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
        placeholder="Type a country"
        type="text"
      />

      <select className="bg-white p-3">
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}