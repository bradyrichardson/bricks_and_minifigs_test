import { Box } from "@mui/material";
import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsBody = (options: RouteOptions): JSX.Element => {
  return options.setDetails ? (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <h2>{options.setDetails.name}</h2>
      <p>Set Number: {options.setDetails.set_number}</p>
      <p>Pieces: {options.setDetails.pieces}</p>
      <p>Status: {options.setDetails.retired ? "Retired" : "Available"}</p>
      <p>Release Year: {options.setDetails.release_year}</p>
    </Box>
  ) : (
    <></>
  );
};

export default DetailsBody;
