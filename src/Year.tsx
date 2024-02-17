import { useParams } from "react-router-dom";
import BasicTable from "./Table";
import { useContext } from "react";
import YearContext from "./Context";

export default function Year() {
  const yearContext = useContext<YearContextType | undefined>(YearContext);

  if (!yearContext) {
    throw new Error("Error in Year el");
  }

  // const { years } = yearContext;

  const { year } = useParams<{ year: string }>();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (year && !years.includes(year)) {
  //     navigate("/error");
  //   }
  // }, [year, years, navigate]);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="font-medium text-5xl text-center mb-3">{year}</div>
        <div className="flex justify-center items-center">
          <div className="w-[1000px]">
            {year ? <BasicTable year={year} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
