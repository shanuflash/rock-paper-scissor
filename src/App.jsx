import { useContext } from "react";
import Board from "./components/Board";
import Result from "./components/Result";
import Nav from "./components/Nav";
import "./App.css";
import { DataContext } from "./context/DataProvider";
import Rules from "./components/Rules";

function App() {
  const { Winner, Modal, setModal } = useContext(DataContext);

  return (
    <div className="App">
      <Nav />
      {Modal && <Rules />}
      <div className="game-container">{Winner ? <Result /> : <Board />}</div>
      <button className="rule-button" onClick={() => setModal((prev) => !prev)}>
        Rules
      </button>
    </div>
  );
}

export default App;
