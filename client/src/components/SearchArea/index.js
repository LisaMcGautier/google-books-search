import React from "react";
import "./style.css";

function SearchArea({ children }) {
  return (
    <div
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="search-area"
    >
      {children}
    </div>
  );
}

export default SearchArea;
