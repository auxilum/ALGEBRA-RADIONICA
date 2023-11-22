import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navContainer">
      <li>
        <Link className="link" to="/">
          Pocetna
        </Link>
      </li>
      <li>
        <Link className="link" to="/popis_filmova">
          Popis filmova
        </Link>
      </li>
      <li>
        <Link className="link" to="/">
          Naruci film
        </Link>
      </li>
    </nav>
  );
}

export default NavBar;
