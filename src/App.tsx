import Selection from "./Selection";

function App(): JSX.Element {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-700 h-screen w-screen overflow-hidden">
      <div className="text-3xl text-gold text-yellow-700 h-screen w-screen">
        <div className="flex flex-col justify-center align-middle p-5 w-[325px]">
          <p className="text-6xl font-medium">nobelPrize</p>
          <p className="text-xl self-end">1901-1905</p>
        </div>
        <div className="flex flex-col gap-5 align-middle items-center justify-center ">
          <img
            className="w-[300px]"
            src="https://res.cloudinary.com/dq5exroyd/image/upload/v1707568608/Nobel_Prize_s73it5.png"
            alt=""
          />
          <Selection />
        </div>
      </div>
    </div>
  );
}

export default App;
