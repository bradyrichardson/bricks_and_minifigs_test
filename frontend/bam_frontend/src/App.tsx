import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { fetchDataAsync } from "./handlers/fetch_data";
import { route } from "./utils/route/route";

function App() {
  const [us_selectedChild, us_setSelectedChild] =
    useState<string>("search results");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDataAsync();
      console.log(res);
    };
    fetchData();
    // us_setSelectedChild("sel");
  }, []);

  // TODO: include the result of fetchData here as a parameter
  const selectedPage = route(us_selectedChild);
  console.log(selectedPage);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {selectedPage && (
        <Layout header={selectedPage.header} body={selectedPage.body} />
      )}
    </div>
  );
}

export default App;
