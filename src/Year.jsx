import { useParams } from "react-router-dom";
import Footer from "./Footer";
import BasicTable from "./Table";

export default function Year() {
  const { year } = useParams();
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="font-medium text-5xl text-center mb-3">{year}</div>
        <div className="flex justify-center items-center">
          <div className="w-[1200px]">
            <BasicTable />
          </div>
        </div>
      </div>
    </div>
  );
}
