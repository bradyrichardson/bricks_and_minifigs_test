import { Box } from "@mui/material";
import type { JSX } from "react";
import type { LayoutProps } from "./i_layout";

// a custom layout component that allows for a consistent structure between pages
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <Box>{children}</Box>;
};

export default Layout;
