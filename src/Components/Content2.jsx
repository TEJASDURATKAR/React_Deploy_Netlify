import React, { useState } from 'react'

function Content2() {
    const [items,setItems]=useState([
        {
          id: 1,
          checked: true,
          item: "item",
        },
        {
          id: 2,
          checked: false,
          item: "item2",
        },
        {
          id: 3,
          checked: true,
          item: "item3",
        },
      ])

      const handleChecked =(id)=>{
         const listItem = items.map((item)=> item.id === id ? {...item,checked : !item.checked} : 
         item)
         setItems(listItem);

      }


      const handleDelete =(id)=>{
        const listItem = items.filter((item)=> item.id !== id)
        console.log(`key :- ${id} delete Clicked`)
        setItems(listItem)
      }
  return (
    <div>
        {items.length ? (
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>
                        <input 
                        type="checkbox"
                        onChange={()=>handleChecked(item.id)}
                        checked={item.checked}
                         />
                         <label htmlFor="">{item.item}</label>
                         <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </li>
                    
                ))

            }
        </ul>
        ):(
            <p>Data is Empty</p>
        )}
      
    </div>
  )
}

export default Content2
