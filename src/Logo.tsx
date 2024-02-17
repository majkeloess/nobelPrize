import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <>
      <Link to="/nobelPrize">
        <div className="flex flex-col justify-center align-middle p-5 w-[325px]">
          <p className="text-6xl font-medium">nobelPrize</p>
          <p className="text-xl self-end">1901-1905</p>
        </div>
      </Link>
    </>
  );
}
