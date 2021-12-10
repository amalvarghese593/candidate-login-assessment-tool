import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TestPage } from "./TestPage";

export const GiveAccess = () => {
  const location = useLocation();
  const { testDetails } = location.state;
  const [isGivenAccess, setIsGivenAccess] = useState(false);
  const openMediaDevices = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      console.log("Got MediaStream:", stream);
      setIsGivenAccess(true);
    } catch (error) {
      console.log("Error accessing media devices.", error);
      setIsGivenAccess(false);
    }
  };

  useEffect(() => {
    openMediaDevices();
  }, [isGivenAccess]);

  return (
    <div>
      {isGivenAccess ? (
        <>
          <TestPage testDurationPassed={testDetails.duration} />
        </>
      ) : (
        <>
          <br />
          <br />
          <br />
          <h1>Give access to camera and microphone to start the test</h1>
        </>
      )}
    </div>
  );
};
