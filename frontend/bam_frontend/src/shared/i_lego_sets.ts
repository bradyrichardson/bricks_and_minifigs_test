// Interface for LEGO set details
export interface LegoSetDetails {
  setNumber: string;
  name: string;
  pieceCount: number;
  isRetired: boolean;
  releaseYear: number;
  images: {
    thumbnail: string;
    fullResolution: string;
    alt: string;
  }[];
  description?: string;
  theme?: string;
  ageRange?: string;
  price?: number;
}
