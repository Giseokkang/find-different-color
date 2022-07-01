import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [remainTime, setRemainTime] = useState(15);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setRemainTime((time) => time - 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetTime = () => {
    setRemainTime(15);
  };

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return { remainTime, startTimer, stopTimer, resetTime, setRemainTime };
};

export default useTimer;
