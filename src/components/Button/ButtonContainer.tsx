import React from "react";
import styles from "./Button.module.css";

const ButtonContainer: React.FC = ({ children }) => {
  return <div className={styles.ButtonContainer}>{children}</div>;
};

export default ButtonContainer;
