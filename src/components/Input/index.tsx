import React, { ChangeEventHandler } from "react";

import styles from "./Input.module.css";

interface Props {
  id: string;
  label: string;
  value?: string;
  mode: "default" | "dropdown";
  type: "text" | "password" | "email";
  error?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({
  id,
  label,
  value,
  mode,
  type,
  error,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value) onChange(value);
  };

  return (
    <div className={styles.InputContainer}>
      <label className={styles.InputLabel} htmlFor={id}>
        {label}
      </label>
      {mode === "default" ? (
        <input
          id={id}
          type={type}
          defaultValue={value}
          className={styles.Input}
          onChange={handleChange}
        />
      ) : (
        <div className={styles.DropDownContainer}>
          <input
            id={id}
            type={type}
            defaultValue={value}
            className={styles.DropDownInput}
            onChange={handleChange}
          />
          <div className={styles.DropDownArrow}>▼</div>
        </div>
      )}
      {error ? <span className={styles.InputError}>{error}</span> : null}
    </div>
  );
};

export default Input;
