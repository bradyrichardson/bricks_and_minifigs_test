import type { JSX } from "react";
import type { ComponentProps } from "../i_component";

interface BodyProps extends ComponentProps {
  [key: string]: string | number | JSX.Element;
}

export type { BodyProps };
