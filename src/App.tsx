import { useState } from "react";
import Footer from "./Footer.tsx";
import Img from "./Img.tsx";
import Selection from "./Selection.tsx";
import YearContext from "./Context.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./Year.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Logo from "./Logo.tsx";
import DataFetcher from "./DataFetcher.tsx";
// import ErrorPage from "./ErrorPage.tsx";

interface QueryClientOptions {
  defaultOptions: {
    queries: {
      staleTime: number;
      cacheTime: number;
    };
  };
}

const queryClientOptions: QueryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
};

const queryClient = new QueryClient(queryClientOptions);

function App() {
  const [age, setAge] = useState<string>("");
  const [years, setYears] = useState<string[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <YearContext.Provider
        value={{ years, setYears, age, setAge } as YearContextType}
      >
        <BrowserRouter>
          <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
            <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
              <Logo />
              <DataFetcher />
              <Routes>
                <Route
                  path="/nobelPrize/"
                  element={
                    <div className="flex flex-col gap-5 align-middle items-center justify-center ">
                      <Img />
                      <Selection />
                    </div>
                  }
                />
                <Route path="/nobelPrize/prize/:year" element={<Year />} />

                {/* <Route path="*" element={<ErrorPage />} />
                <Route path="/error" element={<ErrorPage />} /> */}
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
