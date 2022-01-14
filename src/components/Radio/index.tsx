import React from "react";
import styles from "./Radio.module.css";

interface Props {
  id: string;
  label: string;
  name: string;
  selected?: boolean;
  onChange?: (value: boolean) => void;
  error?: boolean;
}

const Radio: React.FC<Props> = ({
  id,
  label,
  name,
  onChange,
  error,
  selected,
}) => {
  const select = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = target;

    if (onChange) onChange(checked);
  };

  return (
    <div className={styles.RadioItem}>
      <input
        className={styles.Radio}
        type="radio"
        id={id}
        name={name}
        checked={selected}
        onChange={select}
        style={error ? { outline: "1px solid red" } : {}}
      />
      <label className={styles.RadioLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
