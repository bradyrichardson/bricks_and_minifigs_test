import { Box } from "@mui/material";
import type { JSX } from "react";
import Body from "../body/body";
import Header from "../header/header";
import type { LayoutProps } from "./i_layout";

// a custom layout component that allows for a consistent structure between pages
const Layout = ({ ...props }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Header title={props.header.title} children={props.header.children} />
      <Body children={props.body.children} />
    </Box>
  );
};

export default Layout;
