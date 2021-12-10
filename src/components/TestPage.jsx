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
  const [isLinkExpired, dateValue] = useTimer(testDuration, true);
  return (
    <div>
      <h1>Test page</h1>
      <br />
      <strong>
        Time left:
        {dateValue.hours !== 0 ? <span> {dateValue.hours}hr</span> : <></>}
        <span> {dateValue.minutes}min</span>
        <span> {dateValue.seconds}sec</span>
      </strong>
      <Switch />
    </div>
  );
};
