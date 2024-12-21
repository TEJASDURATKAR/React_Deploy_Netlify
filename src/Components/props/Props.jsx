import React from "react";
import Props2 from "./Props2";

function Props() {
  let name = "name From Props 1";
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-success">
              <div className="card-header">
                <h1>Component 1</h1>
              </div>
              <div className="card-body">
                <p>Name:-{name}</p>
                <Props2 name ={name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Props;
