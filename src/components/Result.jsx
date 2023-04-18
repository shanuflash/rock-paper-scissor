import React, { useContext } from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import { DataContext } from "../context/DataProvider";

function Result() {
  const { Winner, setWinner, Pick, setPick, Computer, setComputer } =
    useContext(DataContext);
  const handleReplay = () => {
    setWinner(null);
    setPick(null);
    setComputer(null);
  };
  return (
    <div className="Result">
      <div className="user">
        <div
          className={`board-item ${
            Pick === 1 ? "rock" : Pick === 2 ? "paper" : "scissors"
          }`}
        >
          <img
            src={Pick === 1 ? rock : Pick === 2 ? paper : scissors}
            className={`icon ${
              Pick === 1 ? rock : Pick === 2 ? paper : scissors
            }`}
            onClick={() => handleClick(2)}
          />
        </div>
      </div>
      <div className="win">
        {Winner === "user"
          ? "You Win"
          : Winner === "computer"
          ? "You Lose"
          : Winner === "draw" && "Draw"}
        <button onClick={handleReplay}>Play Again</button>
      </div>
      <div className="computer">
        <div
          className={`board-item ${
            Computer === 1 ? "rock" : Computer === 2 ? "paper" : "scissors"
          }`}
        >
          <img
            src={Computer === 1 ? rock : Computer === 2 ? paper : scissors}
            className="icon"
            onClick={() => handleClick(3)}
          />
        </div>
      </div>
    </div>
  );
}

export default Result;
