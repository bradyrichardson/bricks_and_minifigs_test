import type { JSX } from "react";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsBody = ({ options }: RouteOptions): JSX.Element => {
  console.log(options);
  return <div></div>;
};

export default DetailsBody;
