import { Box, RadioGroup, TextField } from "@mui/material";
import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const SearchHeader = ({ options }: RouteOptions): JSX.Element => {
  return (
    <>
      <h3>Search Results</h3>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <h5>Search for:</h5>
        <RadioGroup></RadioGroup>
        <TextField></TextField>
      </Box>
    </>
  );
};

export default SearchHeader;
