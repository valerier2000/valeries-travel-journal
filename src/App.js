import Navbar from "./components/Navbar";
import Place from "./components/Place";
import data from "./data";

function App() {
  const places = data.map((place) => {
    return <Place key={place.id} place={place} />;
  });

  return (
    <div>
      <Navbar />
      <section>{places}</section>
    </div>
  );
}

export default App;
