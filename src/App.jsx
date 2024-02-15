import { useState, useEffect } from "react";
import Footer from "./Footer";
import Img from "./Img";
import Selection from "./Selection";
import YearContext from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./Year";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Logo from "./Logo";
import DataFetcher from "./DataFetcher";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [years, setYears] = useState([]);
  const [data, setData] = useState({
    id: "",
    category: "",
    prize: "",
    name: "",
    laureateId: "",
    birth: "",
    death: "",
    links: { wiki: "", moreData: "" },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <YearContext.Provider value={{ data, setData, years, setYears }}>
        <BrowserRouter>
          <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
            <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
              <Logo />
              <DataFetcher />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="flex flex-col gap-5 align-middle items-center justify-center ">
                      <Img />
                      <Selection />
                    </div>
                  }
                />
                <Route path="/prize/:year" element={<Year />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </YearContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
