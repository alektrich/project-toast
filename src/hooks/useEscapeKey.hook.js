import { useEffect } from "react";

const useEscapeKey = (callback) => {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
};

export default useEscapeKey;
