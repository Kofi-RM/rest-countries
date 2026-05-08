

export type Country = {
  name: { common: string; official: string };
  capital?: string[];
  region: string;
  population: number;
  landlocked: boolean;
  flags: { png: string; svg: string };
  car: { side: "left" | "right" };
  currencies?: Record<string, { name: string; symbol: string }>;
  borders: string[]
  cca3: string
}; // provides shape of api data
