import type { JSX } from "react";
import * as Pages from "../pages/index";

// this will be used to route between pages using a page name and return the JSX for that page
export const route = (pageName: string): JSX.Element => {
  switch (pageName) {
    case "details":
      return Pages.DetailsPage();
    default:
      return Pages.SearchPage();
  }
};
