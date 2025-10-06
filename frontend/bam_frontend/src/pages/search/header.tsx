import { Box, TextField } from "@mui/material";
import { type JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const SearchHeader = ({ options }: RouteOptions): JSX.Element => {
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <h5>Search for:</h5>
        {/* <RadioGroup></RadioGroup> */}
        <TextField onChange={handleSearchQueryChange} sx={{ width: "90%" }} />
      </Box>
    </>
  );
};

export default SearchHeader;
