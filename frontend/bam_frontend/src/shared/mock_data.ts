import type { LegoSetDetails } from "./i_lego_sets";

// Mock data for LEGO sets
export const mockLegoSets: LegoSetDetails[] = [
  {
    setNumber: "75313",
    name: "AT-AT",
    pieceCount: 1267,
    isRetired: false,
    releaseYear: 2021,
    description:
      "Build the ultimate AT-AT walker from Star Wars: The Empire Strikes Back",
    theme: "Star Wars",
    ageRange: "18+",
    price: 799.99,
    images: [
      {
        thumbnail: "https://images.brickset.com/sets/images/75313-1.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75313-1.jpg",
        alt: "AT-AT front view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75313-2.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75313-2.jpg",
        alt: "AT-AT side view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75313-3.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75313-3.jpg",
        alt: "AT-AT interior view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75313-4.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75313-4.jpg",
        alt: "AT-AT with minifigures",
      },
    ],
  },
  {
    setNumber: "10294",
    name: "LEGO Creator Expert Titanic",
    pieceCount: 9090,
    isRetired: false,
    releaseYear: 2021,
    description: "Build the world's most famous ocean liner in LEGO form",
    theme: "Creator Expert",
    ageRange: "18+",
    price: 629.99,
    images: [
      {
        thumbnail: "https://images.brickset.com/sets/images/10294-1.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10294-1.jpg",
        alt: "Titanic full view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/10294-2.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10294-2.jpg",
        alt: "Titanic side profile",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/10294-3.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10294-3.jpg",
        alt: "Titanic deck details",
      },
    ],
  },
  {
    setNumber: "21325",
    name: "Medieval Blacksmith",
    pieceCount: 2164,
    isRetired: true,
    releaseYear: 2021,
    description: "Build a detailed medieval blacksmith shop with working forge",
    theme: "Ideas",
    ageRange: "18+",
    price: 149.99,
    images: [
      {
        thumbnail: "https://images.brickset.com/sets/images/21325-1.jpg",
        fullResolution: "https://images.brickset.com/sets/large/21325-1.jpg",
        alt: "Medieval Blacksmith exterior",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/21325-2.jpg",
        fullResolution: "https://images.brickset.com/sets/large/21325-2.jpg",
        alt: "Medieval Blacksmith interior",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/21325-3.jpg",
        fullResolution: "https://images.brickset.com/sets/large/21325-3.jpg",
        alt: "Medieval Blacksmith forge detail",
      },
    ],
  },
  {
    setNumber: "75309",
    name: "Republic Gunship",
    pieceCount: 3292,
    isRetired: false,
    releaseYear: 2021,
    description:
      "Build the iconic Republic Gunship from Star Wars: Attack of the Clones",
    theme: "Star Wars",
    ageRange: "18+",
    price: 349.99,
    images: [
      {
        thumbnail: "https://images.brickset.com/sets/images/75309-1.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75309-1.jpg",
        alt: "Republic Gunship front view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75309-2.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75309-2.jpg",
        alt: "Republic Gunship side view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75309-3.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75309-3.jpg",
        alt: "Republic Gunship interior",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75309-4.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75309-4.jpg",
        alt: "Republic Gunship with minifigures",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/75309-5.jpg",
        fullResolution: "https://images.brickset.com/sets/large/75309-5.jpg",
        alt: "Republic Gunship landing gear",
      },
    ],
  },
  {
    setNumber: "10276",
    name: "Colosseum",
    pieceCount: 9036,
    isRetired: true,
    releaseYear: 2020,
    description: "Build the iconic Roman Colosseum in LEGO form",
    theme: "Creator Expert",
    ageRange: "18+",
    price: 549.99,
    images: [
      {
        thumbnail: "https://images.brickset.com/sets/images/10276-1.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10276-1.jpg",
        alt: "Colosseum exterior view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/10276-2.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10276-2.jpg",
        alt: "Colosseum interior view",
      },
      {
        thumbnail: "https://images.brickset.com/sets/images/10276-3.jpg",
        fullResolution: "https://images.brickset.com/sets/large/10276-3.jpg",
        alt: "Colosseum architectural details",
      },
    ],
  },
];

// Helper function to get a set by set number
export const getSetByNumber = (
  setNumber: string
): LegoSetDetails | undefined => {
  return mockLegoSets.find((set) => set.setNumber === setNumber);
};

// Helper function to get all sets
export const getAllSets = (): LegoSetDetails[] => {
  return mockLegoSets;
};

// Helper function to get sets by theme
export const getSetsByTheme = (theme: string): LegoSetDetails[] => {
  return mockLegoSets.filter((set) => set.theme === theme);
};

// Helper function to get retired sets
export const getRetiredSets = (): LegoSetDetails[] => {
  return mockLegoSets.filter((set) => set.isRetired);
};

// Helper function to get current sets
export const getCurrentSets = (): LegoSetDetails[] => {
  return mockLegoSets.filter((set) => !set.isRetired);
};
