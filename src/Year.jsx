import Footer from "./Footer";
import BasicTable from "./Table";

export default function Year(props) {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-600 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-600 h-screen w-screen">
        <div className="flex flex-col justify-center align-middle p-5 w-[325px]">
          <p className="text-6xl font-medium">nobelPrize</p>
          <p className="text-xl self-end">1901-1905</p>
        </div>
        <div className="font-medium text-5xl text-center m-8">{props.year}</div>
        <div className="flex justify-center items-center">
          <div className="w-[1200px]">
            <BasicTable />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
