import React from "react";
import styles from "./Button.module.css";

interface Props {
  id: string;
  label: string;
  formId?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ id, label, onClick }) => {
  return (
    <div id={id} className={styles.Button} onClick={onClick}>
      <span className={styles.ButtonLabel}>{label}</span>
      <div className={styles.ColoredLine} />
    </div>
  );
};

export default React.memo(Button);
