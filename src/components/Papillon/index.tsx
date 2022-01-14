import React from "react";
import styles from "./Papillon.module.css";

interface Props {
  text: string;
}

const Papillon: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.PapillonContainer}>
      <img
        src="/images/papillon.svg"
        className={styles.Papillon}
        alt="Papillon"
      />
      <span className={styles.SignIn}>{text}</span>
    </div>
  );
};

export default React.memo(Papillon);
