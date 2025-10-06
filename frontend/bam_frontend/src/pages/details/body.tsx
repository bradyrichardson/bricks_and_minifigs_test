import { Box } from "@mui/material";
import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsBody = (options: RouteOptions): JSX.Element => {
  return (
    <Box>
      {options.setName}
      {options.setNumber}
      {options.setPieceCount}
      {options.setRetired}
      {options.setReleaseYear}
    </Box>
  );
};

export default DetailsBody;
