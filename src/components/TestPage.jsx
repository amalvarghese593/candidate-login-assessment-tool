import React from "react";
import { useTimer } from "../hooks/useTimer";

import Switch from "./Switch";
import camera from "./camera";

camera.startCamera();
camera.takeSnapshot();

export const TestPage = (props) => {
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });
  const testDuration = Number(props.testDurationPassed);
  const [isExpired3, dateValue3] = useTimer(testDuration, true);
  return (
    <div>
      <h1>Test page</h1>
      <br />
      <strong>
        Time left:
        {dateValue3.hours !== 0 ? <span> {dateValue3.hours}hr</span> : <></>}
        <span> {dateValue3.minutes}min</span>
        <span> {dateValue3.seconds}sec</span>
      </strong>
      <Switch />
    </div>
  );
};
