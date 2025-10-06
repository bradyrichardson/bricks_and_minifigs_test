// Interface for LEGO set details
export interface LegoSetDetails {
  id: string;
  name: string;
  set_number: string;
  release_year: number;
  pieces: number;
  num_minifigs: number;
  retired: boolean;
  image_url: string;
}
