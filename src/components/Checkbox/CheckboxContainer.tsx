import React from "react";
import styles from "./Checkbox.module.css";

const CheckboxContainer: React.FC = ({ children }) => {
  return <div className={styles.CheckboxContainer}>{children}</div>;
};

export default CheckboxContainer;
