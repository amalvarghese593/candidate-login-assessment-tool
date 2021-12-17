import React, { useEffect } from "react";
import "./camera.css";

export const CameraComponent = () => {
  const getVideo = async () => {
    try {
      const constraints = { audio: false, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videoElement = document.getElementById("webcam-video");
      videoElement.srcObject = stream;
      //   window.stream = stream;
      console.log("amal got media");
    } catch (error) {
      console.log("amal got error", error);
    }
  };

  useEffect(() => {
    getVideo();
    let hidden = null;
    let visibilityChange = null;
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    const switchHandler = () => {
      if (document[hidden]) {
        const url = captureImage();
        downloadImage(url, "webcam-image");
      }
    };
    document.addEventListener(visibilityChange, switchHandler);
    return () => {
      document.removeEventListener(visibilityChange, switchHandler);
    };
  }, []);

  const captureImage = () => {
    const canvasElement = document.getElementById("canvas");
    if (canvasElement) {
      const context = canvasElement.getContext("2d");
      context.drawImage(document.getElementById("webcam-video"), 10, 10);
      const dataUrl = canvasElement.toDataURL();
      return dataUrl;
    }
  };
  const downloadImage = (url, fileName) => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="image-capture-container">
      <video id="webcam-video" autoPlay></video>
      <canvas id="canvas" width="700" height="500"></canvas>
    </div>
  );
};
