import { useRouteError } from "react-router-dom";
import Footer from "./Footer";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="flex flex-col justify-center align-middle p-5 w-[325px]">
          <p className="text-6xl font-medium">nobelPrize</p>
          <p className="text-xl self-end">1901-1905</p>
        </div>
        <div className="flex items-center flex-col">
          <p>An unexpected error has occured!</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
