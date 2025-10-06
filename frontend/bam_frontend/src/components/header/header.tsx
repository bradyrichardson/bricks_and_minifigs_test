import { Box } from "@mui/material";
import type { JSX } from "react";
import type { HeaderProps } from "./i_header";

// header component that will render above the body
const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", flexDirection: "col" }}>
      {props.title}
      {props.children}
    </Box>
  );
};

export default Header;
