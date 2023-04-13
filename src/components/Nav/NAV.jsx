import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.module.css";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav className="nav">
      <SearchBar onSearch={onSearch} />
      <button className="nav-button">
        <Link to="/About" className="nav-link">ABOUT</Link>
      </button>

      <button className="nav-button">
        <Link to="/home" className="nav-link">HOME</Link>
      </button>
      
      <button className="nav-button">
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </button>

      <button className="nav-button" onClick={handleLogOut}>LOG OUT</button>
    </nav>
  );
};

export default Nav;
