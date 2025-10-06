import type { JSX } from "react";
import * as Pages from "../../pages/index";
import type { RouteOptions } from "./i_route";

// this will be used to route between pages using a page name and return the JSX for that page
export const route = (
  pageName: string,
  options: RouteOptions = {}
): JSX.Element => {
  switch (pageName) {
    case "details":
      return Pages.DetailsPage(options);
    default:
      return Pages.SearchPage();
  }
};
