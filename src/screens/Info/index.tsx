import React from "react";

import styles from "./Info.module.css";
import SessionInfo from "./SessionInfo";
import InfoBar from "../../components/InfoBar";

const Info: React.FC = () => {
  return (
    <>
      <InfoBar />
      <div className={styles.InfoBody}>
        <div className={styles.TabBar}></div>
        <div className={styles.TabMain}>
          <div className={styles.TabBody}>
            <SessionInfo />
          </div>
          <div className={styles.AdArea}>
            <div className={styles.Ad}>Reklam Alanı 100x250</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
