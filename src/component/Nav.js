import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/items">
          <li>items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
