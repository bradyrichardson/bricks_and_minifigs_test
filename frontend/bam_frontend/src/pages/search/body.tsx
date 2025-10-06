import { Box } from "@mui/material";
import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const SearchBody = ({ options }: RouteOptions): JSX.Element => {
  console.log(options);
  return <Box></Box>;
};

export default SearchBody;
