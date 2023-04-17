import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataProvider from "./context/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
