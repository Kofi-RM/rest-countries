import { createContext, useContext } from "react";
import type { Country } from "./CountryType";

type CountryContextType = {
  countries: Country[];
  loading: boolean;

    sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  itemsPerPage: number
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}; // set shape of Country context - adds sortOrder to avoid passing down 

export const CountryContext =
  createContext<CountryContextType | null>(null);

export function useCountries() {
  const ctx = useContext(CountryContext);

  if (!ctx) {
    throw new Error("useCountries must be used inside CountryProvider");
  }

  return ctx;
}