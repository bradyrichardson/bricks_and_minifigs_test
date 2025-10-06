import { Box, capitalize } from "@mui/material";
import type { JSX } from "react";
import type { LegoSetDetails } from "../../shared/i_lego_sets";

const SearchDisplay = (setDetails: LegoSetDetails): JSX.Element => {
  return (
    <Box
      sx={{
        borderColor: "gray",
        borderRadius: "1px",
        borderStyle: "solid",
        width: "200px",
        height: "200px",
      }}
    >
      <p>
        {setDetails.set_number} - {capitalize(setDetails.name)}
      </p>
      <img
        src={setDetails.image_url}
        alt={setDetails.name}
        style={{ width: "100px", height: "100px" }}
      />
    </Box>
  );
};

export default SearchDisplay;
