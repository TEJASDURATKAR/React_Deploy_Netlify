import React from 'react'
import Props3 from './Props3'

function Props2(props) {
    let name = 'Name form props 2'
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-warning">
              <div className="card-header">
                <h1>Component 2</h1>
              </div>
              <div className="card-body">
                <p>Name:-{props.name}</p>
                <Props3 name ={name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Props2
