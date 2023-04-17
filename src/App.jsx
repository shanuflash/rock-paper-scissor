import { useContext } from "react";
import Board from "./components/Board";
import Result from "./components/Result";
import Nav from "./components/Nav";
import "./App.css";
import { DataContext } from "./context/DataProvider";

function App() {
  // const handleRestart = () => {
  //   setScore({ user: 0, computer: 0 });
  //   setWinner(null);
  // };
  const { Winner } = useContext(DataContext);

  return (
    <div className="App">
      <Nav />
      <div className="game-container">{Winner ? <Result /> : <Board />}</div>
    </div>
  );
}

export default App;
