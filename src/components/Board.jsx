import React, { useState } from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import bgtriangle from "../assets/bg-triangle.svg";
function Board({ isComputer, Score, setScore, Winner, setWinner }) {
  const [Pick, setPick] = useState(null);
  const [Computer, setComputer] = useState(null);

  const handleClick = (i) => {
    if (isComputer === 0) {
      setPick(i);
      setComputer(Math.floor(Math.random() * 3 + 1));
    }
    handleWinner();
  };

  const handleWinner = () => {
    console.log(Pick, Computer);
    if (
      (Pick === 1 && Computer === 3) ||
      (Pick === 2 && Computer === 1) ||
      (Pick === 3 && Computer === 2)
    ) {
      setScore({ ...Score, user: Score.user + 1 });
      setWinner("user");
      // setComputer(null);
      // setPick(null);
    } else if (
      (Pick === 1 && Computer === 2) ||
      (Pick === 2 && Computer === 3) ||
      (Pick === 3 && Computer === 1)
    ) {
      setScore({ ...Score, computer: Score.computer + 1 });
      setWinner("computer");
      // setComputer(null);
      // setPick(null);
    } else {
      setWinner("draw");
    }
  };

  return (
    <div className="board">
      <div className="row">
        <div className="board-item paper">
          <img src={paper} className="icon" onClick={() => handleClick(2)} />
        </div>
        <div className="board-item scissors">
          <img src={scissors} className="icon" onClick={() => handleClick(3)} />
        </div>
      </div>
      <div className="row row2">
        <div className="board-item rock">
          <img src={rock} className="icon" onClick={() => handleClick(1)} />
        </div>
      </div>
    </div>
  );
}

export default Board;
