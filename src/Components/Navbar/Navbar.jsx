import React, { useState } from "react";
import Style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pb-3">
        <div className="container-fluid ms-4">
          <a className="navbar-brand text-white fw-bold" href="#">
            UNITED OFOQ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link text-white fw-semibold px-4"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item ms-5 ">
                <NavLink
                  to="/mydata"
                  className="nav-link text-white fw-semibold px-4"
                >
                  My Data
                </NavLink>
              </li>

              <li className="nav-item ms-5 ">
                <NavLink
                  to="/leaves"
                  className="nav-link text-white fw-semibold px-4"
                >
                  Leaves
                </NavLink>
              </li>

              <li className="nav-item ms-5 ">
                <NavLink
                  to="/reports"
                  className="nav-link text-white fw-semibold px-4"
                >
                  Reports
                </NavLink>
              </li>

              {/* <li className={`nav-item ms-3 px-2 ${activeItem === "home" ? Style.active : ""}`}>
              <Link to="/" className="nav-link" onClick={() => handleItemClick("home")}>
                Home
              </Link>
            </li> */}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 me-5">
              <li>
                <i className="fa-regular fa-bell notification mt-2 fs-5 me-5"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// const [activeItem, setActiveItem] = useState(null);

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };
