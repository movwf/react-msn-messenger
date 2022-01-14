import React from "react";
import styles from "./TopBar.module.css";

import ToggleCircle from "../ToggleCircle";

function TopBar() {
  return (
    <div className={styles.TopBar}>
      <ToggleCircle />
      <img src="/images/logo.svg" alt="MSN" className={styles.MsnLogo} />
      <span className={styles.MsnLabel}>Messenger</span>
    </div>
  );
}

export default React.memo(TopBar);
