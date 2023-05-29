import React from "react";
import { NavLink, Link} from "react-router-dom";
import  "../App.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="navbar-brand" >
            <h1 className="fs-1 navbar-brand h1">Rick & Morty <span className="blue">WiKi</span></h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="navbar-nav fs-5">
                <NavLink activeClassName="active" to="./"  className="nav-link">Character</NavLink>
                <NavLink to="./episode" className="nav-link">Episodes</NavLink>
                <NavLink to="./location" className="nav-link">Locations</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
