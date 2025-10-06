import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { fetchDataAsync } from "./handlers/fetch_data";
import type { LegoSetDetails } from "./shared/i_lego_sets";
import { route } from "./utils/route/route";

function App() {
  const [us_selectedChild, us_setSelectedChild] =
    useState<string>("search results");

  const [us_legoData, us_setLegoData] = useState<LegoSetDetails[] | undefined>(
    undefined
  ); // TODO: in a real project, I would use useContext to avoid prop-drilling, but there are very few layers in this project

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDataAsync();

      // check to ensure we received the data successfully
      if (res) {
        us_setLegoData(res);
        console.log(res[0]);
      } else {
        throw new Error("Did not fetch Lego data successfully");
      }
    };
    fetchData();
  }, []);

  // TODO: include the result of fetchData here as a parameter
  const selectedPage = route(us_selectedChild, { data: us_legoData });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {selectedPage && us_legoData && (
        <Layout header={selectedPage.header} body={selectedPage.body} />
      )}
    </div>
  );
}

export default App;
