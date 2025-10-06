import { Box } from "@mui/material";
import type { JSX } from "react";
import type { BodyProps } from "./i_body";

// body element that will render underneath the header
const Body = ({ ...props }: BodyProps): JSX.Element => {
  console.log("body", props);
  return <Box>{props.children}</Box>;
};

export default Body;
