import { useCallback, useRef } from "react";

const useThrottle = (callback: () => void, delay: number = 200) => {
  const lastRun = useRef(Date.now());
  return useCallback(() => {
    if (Date.now() - lastRun.current >= delay) {
      callback();
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

export default useThrottle;
