import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { DataContext } from "../context/DataProvider";

function Nav() {
  const { Score } = useContext(DataContext);
  return (
    <div className="nav-container">
      <div className="nav">
        <img src={logo} alt="" />
        <div className="score">
          <div className="score-text">Score</div>
          <div className="score-number">
            {Score.user} - {Score.computer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
