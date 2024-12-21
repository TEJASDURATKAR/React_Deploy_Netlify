import React, { useState } from 'react'
import Input from './Input'
import Square from './Square'

function Parent() {
    const [colorVal,setColorVal]=useState('')
  return (
    <div>
      <Square colorVal={colorVal}/>
      <Input 
      colorVal={colorVal} 
      setColorVal={setColorVal}
      />
    </div>
  )
}

export default Parent
