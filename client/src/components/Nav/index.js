import React from "react";
import "./style.css";

import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-info"> */}
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="search" href="/search">
        {/* <a className="search navbar-brand" href="/search"> */}
        <h4>Search</h4>
      </a>
      <a className="saved" href="/saved">
        {/* <a className="saved navbar-brand" href="/saved"> */}
        <h4>Saved</h4>
      </a>


      {/* <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books
        </Link>

      <Link
        to="/saved"
        className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
      >
        Search
      </Link>

      <Link
        to="/saved"
        className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
      >
        Saved
      </Link> */}
      

    </nav>
  );
}





export default Nav;
