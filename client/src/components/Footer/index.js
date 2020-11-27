import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      <span><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/docs/overview"
      style={{ fontWeight: "bold", color: "#f5eddb" }}>Powered by Google Books API</a></span>
    </footer>
  );
}

export default Footer;
