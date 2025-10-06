import type { LayoutProps } from "../../components/layout/i_layout";
import * as Pages from "../../pages/index";
import type { RouteOptions } from "./i_route";

// this will be used to route between pages using a page name and return the JSX for that page
export const route = (
  pageName: string,
  options: RouteOptions = {}
): LayoutProps => {
  switch (pageName) {
    case "details":
      return {
        header: { title: pageName, children: Pages.DetailsHeader(options) },
        body: { children: Pages.DetailsBody(options) },
      };
    default: // search page will be the default page that is routed to
      return {
        header: { title: pageName, children: Pages.SearchHeader(options) },
        body: { children: Pages.SearchBody(options) },
      };
  }
};
