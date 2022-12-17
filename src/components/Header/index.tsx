import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header id={styles.header}>
      <img src="/logo128.png" alt="YouTube Snapshot Logo" />
      <h1>YouTube Snapshot</h1>
      <p>
        Take a snapshot of YouTube videos at any moment with a click of a button
      </p>
    </header>
  );
};

export default Header;
