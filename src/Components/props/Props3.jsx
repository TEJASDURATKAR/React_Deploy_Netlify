import React from 'react'

function Props3( props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-danger">
              <div className="card-header">
                <h1>Component 3</h1>
              </div>
              <div className="card-body">
                <p>Name:-{props.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Props3
