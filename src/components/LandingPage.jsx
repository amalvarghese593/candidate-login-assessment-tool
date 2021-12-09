import React, { useState } from "react";
import "./landingPage.css";
import { NavLink } from "react-router-dom";
import { TimerNew } from "./TimerNew";
export const LandingPage = () => {
  const [popupStyle, setPopupStyle] = useState({});
  const [selectedTestObject, setSelectedTestObject] = useState({});
  const openPopup = (item) => {
    setPopupStyle({ display: "flex" });
    setSelectedTestObject({
      ...selectedTestObject,
      name: item.name,
      duration: item.duration,
    });
  };
  const closePopup = () => {
    setPopupStyle({ display: "none" });
  };
  const agreeHandler = (e) => {
    const checkboxValue = e.target.checked;
    if (checkboxValue === true) {
      document.getElementById("start-test").disabled = false;
    } else {
      document.getElementById("start-test").disabled = true;
    }
  };
  const testType = [
    {
      name: "Psychometry",
      count: 15,
      duration: 1,
    },
    {
      name: "Aptitude",
      count: 30,
      duration: 120,
    },
    {
      name: "English communication",
      count: 20,
      duration: 30,
    },
  ];

  return (
    <div className="candidate-landing-wrapper">
      <h1>Landing page</h1>
      <TimerNew />
      {testType.map((item, index) => {
        return (
          <div className="test-type" key={index}>
            <h2>{item.name}</h2>
            <hr />
            <br />
            <div className="flex-container">
              <span>Questions: {item.count}</span>
              <span>Duration: {item.duration} min</span>
              <button
                onClick={() => {
                  openPopup(item);
                }}
              >
                Select Test
              </button>
            </div>
          </div>
        );
      })}
      <div className="popup-container" style={popupStyle}>
        <div className="instructions-popup">
          <h1>Instructions popup</h1>
          <button onClick={closePopup}>close X</button>
          <span>
            <h3>set of instructions</h3>
            <br />
            <hr />
          </span>
          <p>Allow access to camera and microphone to start the test</p>
          <span>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              onChange={agreeHandler}
            />
            <label htmlFor="agree">I agree to terms & conditions</label>
          </span>

          <NavLink
            to="/give-access"
            state={{ testDetails: selectedTestObject }}
          >
            <button disabled="disabled" id="start-test">
              start test
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
