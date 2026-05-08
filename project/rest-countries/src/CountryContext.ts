import { createContext, useContext } from "react";
import type { Country } from "./CountryType";

type CountryContextType = {
  countries: Country[];
  loading: boolean;
};

export const CountryContext =
  createContext<CountryContextType | null>(null);

export function useCountries() {
  const ctx = useContext(CountryContext);

  if (!ctx) {
    throw new Error("useCountries must be used inside CountryProvider");
  }

  return ctx;
}