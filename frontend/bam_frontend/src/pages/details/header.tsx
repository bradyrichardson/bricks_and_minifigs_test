import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsHeader = ({ options }: RouteOptions): JSX.Element => {
  console.log(options);
  return <div></div>;
};

export default DetailsHeader;

// REQUIREMENTS FOR DETAILS:
// The detail page should include:
// ○ Set number
// ○ Name
// ○ Piece Count
// ○ Whether the set is retired or not
// ○ Release Year
// Thumbnails of all images available for a set
// Clicking on a thumbnail should bring up a modal showing a full resolution version of the
// image
