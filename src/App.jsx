import logo from "./logo.svg";
import "./App.css";
import "./components/Pokecard.css";
import Pokegame from "./components/Pokegame";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <Pokegame />
    </div>
  );
}

export default App;
