import { useState } from "react";
import Footer from "./Footer";
import Img from "./Img";
import Selection from "./Selection";
import YearContext from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./Year";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Logo from "./Logo";
import DataFetcher from "./DataFetcher";
import ErrorPage from "./ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [age, setAge] = useState("");
  const [years, setYears] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <YearContext.Provider value={{ years, setYears, age, setAge }}>
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
                <Route path="*" element={<ErrorPage />} />
                <Route path="/error" element={<ErrorPage />} />
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
