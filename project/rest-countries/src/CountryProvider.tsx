import { useEffect, useState } from "react";
import { CountryContext } from "./CountryContext";
import type { Country } from "./CountryType";

export function CountryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,landlocked,car"
      );

      const data: Country[] = await res.json();

      setCountries(data);
      setLoading(false);
    }

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, loading,sortOrder, setSortOrder }}>
      {children}
    </CountryContext.Provider>
  );
}