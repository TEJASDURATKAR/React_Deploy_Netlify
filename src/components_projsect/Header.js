import React from 'react'

function Header({title}) {
  return (
    <header style={{
        textAlign:'center',backgroundColor:'aqua'
    }}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
