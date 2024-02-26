import React from "react";

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: Math.random().toString(),
        message,
        variant,
      },
    ]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const clearAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        clearAll,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
