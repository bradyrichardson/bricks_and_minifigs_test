import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { route } from "./utils/route/route";

function App() {
  const [us_selectedChild, us_setSelectedChild] = useState<string>("search");

  return <Layout children={route(us_selectedChild)} />;
}

export default App;
