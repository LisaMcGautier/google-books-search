import React from "react";

function JumbotronResults({ children }) {
  return (
    <div
      style={{  clear: "both", paddingTop: 120, textAlign: "center" }}
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default JumbotronResults;
