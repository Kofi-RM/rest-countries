

import { useCountries } from "./CountryContext"

export default function AlphabetSwitcher() {
    const {sortOrder, setSortOrder} = useCountries();
    return(
         <button
    onClick={() =>
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    }
    className="ml-4 px-3 py-1 rounded shadow text-sm transition hover:scale-105"
    style={{
      background: "var(--bg)",
      color: "var(--text)",
    }}
  >
    {sortOrder === "asc" ? "A → Z" : "Z → A"}
  </button>
    )
}