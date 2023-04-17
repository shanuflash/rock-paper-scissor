import React, { useState, createContext } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [Score, setScore] = useState({ user: 0, computer: 0 });
  const [Winner, setWinner] = useState(null);
  const [Pick, setPick] = useState(null);
  const [Computer, setComputer] = useState(null);
  const [Modal, setModal] = useState(false);

  // const [Round, setRound] = useState(0);
  return (
    <DataContext.Provider
      value={{
        Score,
        setScore,
        Winner,
        setWinner,
        Pick,
        setPick,
        Computer,
        setComputer,
        Modal,
        setModal,
        // Round,
        // setRound,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
