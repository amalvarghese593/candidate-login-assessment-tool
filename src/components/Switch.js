import React, { useState, useEffect } from "react";
import camera from "./camera";

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

function Switch() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);

    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange);
    };
  }, []);

  const handleVisibilityChange = () => {
    console.log(document[hidden]);
    if (document[hidden]) {
      alert("Cannot switch tabs");
      camera.takeSnapshot();
      setActions((prev) => [...prev, "hide"]);
      document.title = document.visibilityState;
    } else {
      setActions((prev) => [...prev, "show"]);
      document.title = document.visibilityState;
    }
  };

  return (
    <ul>
      {actions.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  );
}

export default Switch;
