import { useState, useRef, useEffect } from "react";

export const useTimer = (passedValue, isDuration = false) => {
  const [dateValue, setDateValue] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isExpired, setIsExpired] = useState(false);
  const [endTime, setEndTime] = useState(
    isDuration === true
      ? Date.now() + passedValue * 60 * 1000
      : new Date(passedValue).getTime()
  );

  let interval = useRef();
  const setTimer = () => {
    interval = setInterval(() => {
      const timeNow = Date.now();
      const duration = Math.floor((endTime - timeNow) / 1000);
      const hours = Math.floor(duration / (60 * 60));
      const minutes = Math.floor((duration % (60 * 60)) / 60);
      const seconds = Math.floor((duration % (60 * 60)) % 60);

      if (duration < 0) {
        setIsExpired(true);
        clearInterval(interval.current);
      } else {
        setDateValue({
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  };
  // useEffect(() => {
  //   if (isDuration === true) {
  //     setEndTime(Date.now() + passedValue * 60 * 1000);
  //   } else {
  //     const countdownDate = new Date(passedValue).getTime();
  //     setEndTime(countdownDate);
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // }, [endTime]);
  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return [isExpired, dateValue];
};
