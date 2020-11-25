import React from "react";
import "./style.css";

function Hero({ children }) {
  return (
    <div
      // style={{ height: 200, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="hero"
    >
      {children}
    </div>
  );
}

export default Hero;
