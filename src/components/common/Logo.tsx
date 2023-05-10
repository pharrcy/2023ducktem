import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <h1>
        <Link to="/" className={styles.logoLink}>
          DuckTem
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
