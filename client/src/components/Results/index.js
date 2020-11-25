import React from "react";
import "./style.css";

function Results({ children }) {
  return (
    <div
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="results"
    >
      {children}
    </div>
  );
}

export default Results;
