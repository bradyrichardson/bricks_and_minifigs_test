import type { LegoSetDetails } from "../shared/i_lego_sets";

export const fetchDataAsync = async (): Promise<LegoSetDetails[] | void> => {
  try {
    const res = await fetch("http://localhost:3000/fetch");
    return res.json();
  } catch (error) {
    console.error("Failed to get data", error);
  }
};
