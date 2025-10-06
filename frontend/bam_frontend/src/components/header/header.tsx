import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import { capitalize } from "../../utils/helpers/helpers";
import type { HeaderProps } from "./i_header";

// header component that will render above the body
const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
      }}
    >
      <Box sx={{ padding: "20px", marginRight: "auto" }}>
        <Typography variant="h4">{capitalize(props.title)}</Typography>
      </Box>
      <Box sx={{ paddingX: "40px" }}>{props.children}</Box>
    </Box>
  );
};

export default Header;
