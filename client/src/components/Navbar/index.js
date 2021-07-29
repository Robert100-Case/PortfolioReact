import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/port1"
              className={
                window.location.pathname === "/" || window.location.pathname === "/port1"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              PortfolioPage1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/port2"
              className={
                window.location.pathname === "/" || window.location.pathname === "/port2"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              PortfolioPage2
            </Link>
          </li>


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
