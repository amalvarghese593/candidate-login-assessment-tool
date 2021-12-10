import React, { useState, useEffect } from "react";
import "./landingPage.css";
import { NavLink } from "react-router-dom";

export const InstructionsModal = ({
  isOpen,
  setIsOpen,
  selectedTestObject,
}) => {
  const [popupStyle, setPopupStyle] = useState({});
  useEffect(() => {
    if (isOpen) setPopupStyle({ display: "flex" });
  }, [isOpen]);
  const closePopup = () => {
    setPopupStyle({ display: "none" });
    setIsOpen(false);
  };
  const agreeHandler = (e) => {
    const checkboxValue = e.target.checked;
    if (checkboxValue === true) {
      document.getElementById("start-test").disabled = false;
    } else {
      document.getElementById("start-test").disabled = true;
    }
  };
  if (!isOpen) return null;
  return (
    <div>
      <h1>popup</h1>
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
