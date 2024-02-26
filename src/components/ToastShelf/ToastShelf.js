import React, { useEffect } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../hooks/useEscapeKey.hook";

function ToastShelf() {
  const { toasts, removeToast, clearAll } = React.useContext(ToastContext);
  useEscapeKey(clearAll);

  return (
    <ol
      aria-live="polite"
      role="region"
      area-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            close={() => removeToast(toast.id)}
            message={toast.message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
