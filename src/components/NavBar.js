import React, { useState } from "react";
import "../index.css";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div>
            <h1>Logo</h1>
          </div>

          <div>
            <h1>Menu bar</h1>
          </div>

          <ul className={/click ?  "menu active" : "menu"/}>
            <li className={/item/}>
              <a href="#">Home</a>
            </li>
            <li className={/item/}>
              <a href="#">Services</a>
            </li>
            <li className={/item/}>
              <a href="#">Sign-up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
