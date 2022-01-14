import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function Links() {
  return (
    <div className={styles.LinksContainer}>
      <div className={styles.LeftLinksContiner}>
        <Link to="/test" className={styles.Link}>
          Forgot your password?
        </Link>
        <Link to="/app" className={styles.Link}>
          Service Status
        </Link>
      </div>
      <div>
        <Link to="/register" className={styles.Link}>
          Get a new account
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Links);
