import React, { useState } from "react";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
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
    <div className={`board ${isComputer && "computer"}`}>
      <div className="board-item">
        <FaRegHandRock
          className={`${Pick === 1 && "selected"}`}
          onClick={() => handleClick(1)}
        />
      </div>
      <div className="board-item">
        <FaRegHandPaper
          className={`${Pick === 2 && "selected"}
          ${isComputer === 1 && Computer === 2 && "selected"}
          `}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="board-item">
        <FaRegHandScissors
          className={`${Pick === 3 && "selected"}`}
          onClick={() => handleClick(3)}
        />
      </div>
    </div>
  );
}

export default Board;
