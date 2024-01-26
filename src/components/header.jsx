import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/652/073/original/fake-red-stamp-on-a-transparent-background-free-png.png"
          alt="logo"
        />
      </div>
      <ul className="navbar_links">
        <li>
          <Link to={""}>Home</Link>
        </li>
        <li>
          <Link to={""}>About</Link>
        </li>

        <li>
          <Link to={""}>Explor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
