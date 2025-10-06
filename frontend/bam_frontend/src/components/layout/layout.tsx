import { Box } from "@mui/material";
import type { JSX } from "react";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import type { LayoutProps } from "./i_layout";

// a custom layout component that allows for a consistent structure between pages
const Layout = ({ ...props }: LayoutProps): JSX.Element => {
  return (
    <Box>
      <Header title={props.header.title} children={props.header.children} />
      <Body children={props.body.children} />
    </Box>
  );
};

export default Layout;
