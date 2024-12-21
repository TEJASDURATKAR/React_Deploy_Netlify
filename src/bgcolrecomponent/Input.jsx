import React from "react";
import './Style.css'

function Input({ colorVal, setColorVal }) {
  return (
    <div className="containerINput">
        
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Add Color Name :</label>
        <input
          type="text"
          value={colorVal}
          placeholder="Add Color Name"
          required
          onChange={(e) => setColorVal(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input;
