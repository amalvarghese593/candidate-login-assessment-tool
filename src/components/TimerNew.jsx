import React from "react";
import { useTimer } from "../hooks/useTimer";
import "./timer.css";

export const TimerNew = () => {
  const [isLinkExpired, dateValue] = useTimer("December 9, 2021 00:00:00");
  return (
    <div className="timer-wrapper">
      <span className="date-container">
        {isLinkExpired ? (
          <>
            <div className="expired-message-wrapper">
              <div className="expired-message-container">
                <p>
                  Sorry, the test link has expired! Please{" "}
                  <a href="#">contact</a> our team to reactivate the link.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3>Test link expires in</h3>
            <span>{dateValue.hours}</span>:<span>{dateValue.minutes}</span>:
            <span>{dateValue.seconds}</span>
          </>
        )}
      </span>
    </div>
  );
};
