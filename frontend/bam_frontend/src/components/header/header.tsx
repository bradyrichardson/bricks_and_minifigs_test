import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import { capitalize } from "../../utils/helpers/helpers";
import type { HeaderProps } from "./i_header";

// header component that will render above the body
const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ padding: "20px", marginRight: "auto" }}>
        <Typography variant="h4">{capitalize(props.title)}</Typography>
      </Box>
      <Box sx={{ paddingX: "40px" }}>{props.children}</Box>
    </Box>
  );
};

export default Header;
