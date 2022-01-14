import React from "react";
import styles from "./Radio.module.css";

const RadioContainer: React.FC = ({ children }) => {
  return <div className={styles.RadioContainer}>{children}</div>;
};

export default RadioContainer;
