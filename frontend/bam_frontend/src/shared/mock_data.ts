import type { LegoSetDetails } from "./i_lego_sets";

// Mock data for LEGO sets
export const mockLegoSets: LegoSetDetails[] = [
  {
    id: "1",
    name: "AT-AT",
    set_number: "75313",
    release_year: 2021,
    pieces: 1267,
    num_minifigs: 4,
    retired: "FALSE",
    image_urls: ["https://images.brickset.com/sets/images/75313-1.jpg"],
  },
  {
    id: "2",
    name: "LEGO Creator Expert Titanic",
    set_number: "10294",
    release_year: 2021,
    pieces: 9090,
    num_minifigs: 0,
    retired: "FALSE",
    image_urls: ["https://images.brickset.com/sets/images/10294-1.jpg"],
  },
  {
    id: "3",
    name: "Medieval Blacksmith",
    set_number: "21325",
    release_year: 2021,
    pieces: 2164,
    num_minifigs: 3,
    retired: "TRUE",
    image_urls: ["https://images.brickset.com/sets/images/21325-1.jpg"],
  },
  {
    id: "4",
    name: "Republic Gunship",
    set_number: "75309",
    release_year: 2021,
    pieces: 3292,
    num_minifigs: 5,
    retired: "FALSE",
    image_urls: ["https://images.brickset.com/sets/images/75309-1.jpg"],
  },
  {
    id: "5",
    name: "Colosseum",
    set_number: "10276",
    release_year: 2020,
    pieces: 9036,
    num_minifigs: 0,
    retired: "TRUE",
    image_urls: ["https://images.brickset.com/sets/images/10276-1.jpg"],
  },
];

// Helper function to get a set by set number
export const getSetByNumber = (
  setNumber: string
): LegoSetDetails | undefined => {
  return mockLegoSets.find((set) => set.set_number === setNumber);
};

// Helper function to get all sets
export const getAllSets = (): LegoSetDetails[] => {
  return mockLegoSets;
};

// Helper function to get retired sets
export const getRetiredSets = (): LegoSetDetails[] => {
  return mockLegoSets.filter((set) => set.retired === "TRUE");
};

// Helper function to get current sets
export const getCurrentSets = (): LegoSetDetails[] => {
  return mockLegoSets.filter((set) => set.retired === "FALSE");
};
