import { useState } from "react";
import Board from "./components/Board";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [Score, setScore] = useState({ user: 0, computer: 0 });
  const [Winner, setWinner] = useState(null);
  const [Gameover, setGameover] = useState(0);

  const handleRestart = () => {
    setScore({ user: 0, computer: 0 });
    setWinner(null);
  };

  return (
    <div className="App">
      <div className="title-container">
        <div className="title">
          <img src={logo} alt="" />
          <div className="score">
            <div className="score-text">Score</div>
            <div className="score-number">
              {Score.user} - {Score.computer}
            </div>
          </div>
        </div>
        {/* <div className="score">
          {Score.user} - {Score.computer}{" "}
          <button onClick={handleRestart}>Restart Game</button>
        </div>
        <div className="win">
          <div className="game-over">
            {Score.computer === 5 ||
              (Score.user === 5 && <div>Game Over!</div>)}
          </div>
          <>
            {Winner === "user"
              ? "User wins this round!"
              : Winner === "computer"
              ? "Computer wins this round!"
              : "This round is a Draw!"}
          </>
        </div> */}
      </div>
      <div className="game-container">
        <Board
          isComputer={0}
          {...{ Score, setScore, Winner, setWinner, Gameover, setGameover }}
        />
      </div>
    </div>
  );
}

export default App;
