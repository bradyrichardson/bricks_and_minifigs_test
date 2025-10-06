import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { route } from "./utils/route/route";

function App() {
  const [us_selectedChild, us_setSelectedChild] = useState<string>("search");

  const selectedPage = route(us_selectedChild);

  return (
    selectedPage && (
      <Layout header={selectedPage.header} body={selectedPage.body} />
    )
  );
}

export default App;
