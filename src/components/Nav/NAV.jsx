import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <Link to="/About">ABOUT</Link>
      </button>

      <button>
        <Link to="/home">HOME</Link>
      </button>

      <button onClick={handleLogOut}>LOG OUT</button>
    </nav>
  );
};

export default Nav;
