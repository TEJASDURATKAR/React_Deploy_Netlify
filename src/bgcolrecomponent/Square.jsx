import React from "react";
import './Style.css'

const Square = ({ colorVal }) => {
  return (
    <div className="square-container"> {/* Centering container */}
      <section className="square text-dark" style={{ backgroundColor: colorVal }}>
        <p>{colorVal ? colorVal : "Empty Value"}</p>
      </section>
    </div>
  );
};

Square.defaultProps = {
  colorVal: "Empty color value",
};

export default Square;
