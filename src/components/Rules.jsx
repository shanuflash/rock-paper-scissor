import React, { useContext } from "react";
import rule from "../assets/image-rules.svg";
import { DataContext } from "../context/DataProvider";

function Rules() {
  const { setModal } = useContext(DataContext);
  return (
    <div className="rules">
      Rules
      <div onClick={() => setModal((prev) => !prev)} className="close">
        X
      </div>
      <img src={rule} alt="" />
    </div>
  );
}

export default Rules;
