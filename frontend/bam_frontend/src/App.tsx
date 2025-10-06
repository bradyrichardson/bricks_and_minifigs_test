import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/layout";
import { fetchDataAsync } from "./handlers/fetch_data";
import * as Pages from "./pages/index";
import type { LegoSetDetails } from "./shared/i_lego_sets";

function App() {
  const [us_legoData, us_setLegoData] = useState<LegoSetDetails[] | undefined>(
    undefined
  ); // TODO: in a real project, I would use useContext to avoid prop-drilling, but there are very few layers in this project

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDataAsync();

      // check to ensure we received the data successfully
      if (res) {
        us_setLegoData(res);
      } else {
        throw new Error("Did not fetch Lego data successfully");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {us_legoData && (
        <Routes>
          <Route
            index
            element={
              <Layout
                header={{
                  title: "Search",
                  children: <Pages.SearchHeader data={us_legoData} />,
                }}
                body={{ children: <Pages.SearchBody data={us_legoData} /> }}
              />
            }
          />
          <Route
            path="details/:id"
            element={
              <Layout
                header={{
                  title: "Details",
                  children: <Pages.DetailsHeader data={us_legoData} />,
                }}
                body={{ children: <Pages.DetailsBody data={us_legoData} /> }}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
