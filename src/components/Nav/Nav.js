import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/movies"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
