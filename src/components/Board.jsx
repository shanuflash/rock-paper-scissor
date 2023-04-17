import React, { useContext, useEffect } from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import { DataContext } from "../context/DataProvider";
function Board() {
  const { Pick, Computer, setPick, setComputer, setScore, setWinner } =
    useContext(DataContext);

  const handleClick = (i) => {
    setPick(i);
    setComputer(Math.floor(Math.random() * 3 + 1));
  };

  const handleWinner = () => {
    if (
      (Pick === 1 && Computer === 3) ||
      (Pick === 2 && Computer === 1) ||
      (Pick === 3 && Computer === 2)
    ) {
      setWinner("user");
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
      console.log("user", Pick, Computer);
    } else if (
      (Pick === 1 && Computer === 2) ||
      (Pick === 2 && Computer === 3) ||
      (Pick === 3 && Computer === 1)
    ) {
      setWinner("computer");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      console.log("comp", Pick, Computer);
    } else {
      setWinner("draw");
      console.log("draw", Pick, Computer);
    }
  };

  useEffect(() => {
    if (Pick !== null && Computer !== null) {
      handleWinner();
    }
  }, [Pick, Computer]);

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
