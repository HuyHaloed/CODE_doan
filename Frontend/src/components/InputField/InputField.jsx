import { useState } from "react";
import styles from "./InputField.module.css";
import { Icon } from "@iconify/react";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className={styles.wrapper}>
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className={styles.inputField}
        value={value}
        onChange={onChange}
        required
      />
      <Icon icon={icon} className={styles.icon} />
      {type === "password" && (
        <Icon
          className={styles.eyeIcon}
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          icon={
            isPasswordShown
              ? "fluent:eye-20-filled"
              : "fluent:eye-off-20-filled"
          }
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default InputField;
