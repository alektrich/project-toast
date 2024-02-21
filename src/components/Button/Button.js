import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", ...delegated }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
