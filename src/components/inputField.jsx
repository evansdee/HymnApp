import { useState } from "react";
import styles from "./inputfield.module.css";
import { useHymn } from "../hymnContext";

function InputField() {
  const { text, setText,handleClearButtonClick} = useHymn();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.inputField}
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {text && (
        <button className={styles.clearButton} onClick={handleClearButtonClick}>
          <svg viewBox="0 0 24 24" className={styles.clearIcon}>
            <path
              fill="currentColor"
              d="M12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}

export default InputField;
