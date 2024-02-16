import { useParams, useNavigate } from "react-router-dom";
import BasicTable from "./Table";
import { useContext, useEffect } from "react";
import YearContext from "./Context";

export default function Year() {
  const { years } = useContext(YearContext);
  const { year } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!years.includes(year)) {
      navigate("/error");
    }
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="font-medium text-5xl text-center mb-3">{year}</div>
        <div className="flex justify-center items-center">
          <div className="w-[1200px]">
            <BasicTable year={year} />
          </div>
        </div>
      </div>
    </div>
  );
}
