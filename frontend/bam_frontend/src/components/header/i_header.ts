import type { JSX } from "react";
import type { ComponentProps } from "../i_component";

interface HeaderProps extends ComponentProps {
  title: string;
  [key: string]: string | number | JSX.Element;
}

export type { HeaderProps };
