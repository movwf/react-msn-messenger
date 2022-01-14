import React from "react";
import styles from "./ToggleCircle.module.css";

function ToggleCircle() {
  return (
    <div className={styles.ToggleCircle}>
      <img src="/ui/small-up-down.png" alt="Open/Close" />
    </div>
  );
}

export default React.memo(ToggleCircle);
