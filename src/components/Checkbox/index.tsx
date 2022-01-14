import React from "react";
import styles from "./Checkbox.module.css";

interface Props {
  id: string;
  label: string;
  onChange?: (value: boolean) => void;
  error?: boolean;
}

const Checkbox: React.FC<Props> = ({ id, label, onChange, error }) => {
  const check = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = target;

    if (onChange) onChange(checked);
  };

  return (
    <div className={styles.CheckboxItem}>
      <input
        className={styles.Checkbox}
        type="checkbox"
        id={id}
        onChange={check}
        style={error ? { outline: "1px solid red" } : {}}
      />
      <label className={styles.CheckboxLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default React.memo(Checkbox);
