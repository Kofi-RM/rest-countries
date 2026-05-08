import type { Country } from "./CountryType";

type SortOrder = "asc" | "desc";

export default function filterCountry(
  countries: Country[],
  query: string,
  filter: string,
  sortOrder: SortOrder) {

  const q = query.toLowerCase().trim();

  const result = countries.filter((c) => {
    const matchesSearch = c.name.common.toLowerCase().includes(q);
    const matchesRegion = filter ? c.region === filter : true;
    return matchesSearch && matchesRegion;
  }); // filter

  return result.sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();

    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA); // sort
  });
}