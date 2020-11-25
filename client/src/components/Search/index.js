import React from "react";
import "./style.css";

function Search({ children }) {
  return (
    <div
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="search"
    >
      {children}
    </div>
  );
}

export default Search;
