import React, { useState } from "react";
import "../index.css";
import { FaMoneyBillWave, FaList, FaRegWindowClose } from "react-icons/fa";
function NavBar() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Home</h1>
          <FaMoneyBillWave className="navbar-icon" />
        </div>

        <div className="navbar-menu" onClick={clickHandler}>
          <h1>{click ? <FaRegWindowClose /> : <FaList />}</h1>
        </div>

        <ul className={"navbar-item-container"}>
          <li className="navbar-items">
            <a href="#" className="navbar-links">
              Services
            </a>
          </li>
          <li className="navbar-items">
            <a href="#" className="navbar-links">
              Contact Us
            </a>
          </li>
          <li className="navbar-items">
            <a href="#" className="navbar-links">
              Sign-up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
