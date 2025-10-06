import { Box } from "@mui/material";
import type { JSX } from "react";
import SearchDisplay from "../../components/search_display/search_display";
import type { RouteOptions } from "../../utils/route/i_route";

const SearchBody = (options: RouteOptions): JSX.Element => {
  const data = options.data;

  return data ? (
    <Box sx={{ padding: "20px", display: "flex" }}>
      {data.map((entry) => {
        return SearchDisplay(entry);
      })}
    </Box>
  ) : (
    <></>
  );
};

export default SearchBody;
