import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <Logo />
      {/* Add navigation links and user profile here */}
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/signin" className={styles.navLink}>
              Sign In
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/signup" className={styles.navLink}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
