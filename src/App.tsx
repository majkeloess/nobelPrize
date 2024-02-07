import Selection from "./Selection";

function App(): JSX.Element {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-yellow-700 h-screen w-screen">
      <div className="text-3xl text-gold text-yellow-700">
        <p>noblePrize</p>
        <p>1901-1905</p>
        <Selection />
      </div>
    </div>
  );
}

export default App;
