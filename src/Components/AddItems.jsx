import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './AddItems.css'

function AddItems({newItems,setNewItems,handleSubmit}) {

  return (
    <div>
        <form action="" className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
            autoFocus
            id='addItem'
             type="text"
             placeholder='Enter the Item'
             value={newItems}
             onChange={(e)=>setNewItems(e.target.value)}
             required
            
            />
            <button type='submit' aria-label='Add item' className='btn btn-success  ms-2'><FaPlus/></button>
        </form>
      
    </div>
  )
}

export default AddItems
