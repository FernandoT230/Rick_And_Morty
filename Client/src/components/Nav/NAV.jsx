import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <button className={styles["nav-button"]}>
        <Link to="/About" className={styles["nav-link"]}>ABOUT</Link>
      </button>

      <button className={styles["nav-button"]}>
        <Link to="/home" className={styles["nav-link"]}>HOME</Link>
      </button>
      
      <button className={styles["nav-button"]}>
        <Link to="/favorites" className={styles["nav-link"]}>Favorites</Link>
      </button>

      <button className={styles["nav-button"]} onClick={handleLogOut}>LOG OUT</button>
    </nav>
  );
};

export default Nav;
