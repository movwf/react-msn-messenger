import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <img src="/images/github-logo.svg" alt="Github" className={styles.Logo} />
      <a href="https://github.com/movwf" className={styles.GithubLabel}>
        Movwf
      </a>
      <span className={styles.GithubLabel}> - 2022</span>
    </div>
  );
}

export default React.memo(Footer);
