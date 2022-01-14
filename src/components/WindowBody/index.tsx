import React from "react";
import styles from "./WindowBody.module.css";

const WindowBody: React.FC = ({ children }) => {
  return <div className={styles.WindowBody}>{children}</div>;
};

export default WindowBody;
