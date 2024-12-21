import React from "react";
import "./Buttons.css"; // Optional: Add styles

function Buttons({ buttonText, reqType, setReqType }) {
  return (
    <button
      className={`button ${buttonText === reqType ? "selected" : ""}`}
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
}

export default Buttons;
