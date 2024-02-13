import { useEffect, useState } from "react";
import Footer from "./Footer";
import Img from "./Img";
import Selection from "./Selection";
import CircularProgress from "@mui/material-next/CircularProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="flex flex-col justify-center align-middle p-5 w-[325px]">
          <p className="text-6xl font-medium">nobelPrize</p>
          <p className="text-xl self-end">1901-1905</p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[400px] align-middle">
            <CircularProgress
              sx={{ width: "70px", height: "70px" }}
              color="secondary"
              fourColor={false}
              variant="indeterminate"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 align-middle items-center justify-center ">
            <Img />
            <Selection />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
