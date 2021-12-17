import React, { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import { CameraComponent } from "./CameraComponent";
// import Switch from "./Switch";
// import camera from "./camera";

export const TestPage = (props) => {
  const preventRefresh = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    window.addEventListener("beforeunload", preventRefresh);
    // camera.startCamera();
    // camera.takeSnapshot();
    return () => {
      window.removeEventListener("beforeunload", preventRefresh);
    };
  }, []);
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
      {/* <Switch /> */}
      <CameraComponent />
    </div>
  );
};
