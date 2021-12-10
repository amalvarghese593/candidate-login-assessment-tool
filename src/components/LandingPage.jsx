import React, { useState } from "react";
import "./landingPage.css";
import { TimerNew } from "./TimerNew";
import { InstructionsModal } from "./InstructionsModal";

export const LandingPage = () => {
  const [selectedTestObject, setSelectedTestObject] = useState({});
  const [isTestSelected, setIsTestSelected] = useState(false);
  const openPopup = (item) => {
    setSelectedTestObject({
      ...selectedTestObject,
      name: item.name,
      duration: item.duration,
    });
    setIsTestSelected(true);
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
      <InstructionsModal
        isOpen={isTestSelected}
        setIsOpen={setIsTestSelected}
        selectedTestObject={selectedTestObject}
      />
    </div>
  );
};
