import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AddItems from "./AddItems";
import SearchCom from "./SearchCom";
import "./Content.css";

const Content = () => {
  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const API_URL = (`http://localhost:3500/items`)

   useEffect(()=>{
    const fetchItems = async ()=>{
      try{
        const response  = await fetch(API_URL)
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      }catch(error){
        console.log(error,'Something went wrong')
      }
    }
    fetchItems();
   },[])


  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    try {
      localStorage.setItem("shopinglist", JSON.stringify(newItems));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  const addItems = async (item) => {
    if (!item.trim()) return; // Avoid adding empty items
    if (items.some((i) => i.item === item)) return; // Avoid duplicates
  
    const myNewItem = { checked: false, item }; // No need to manage 'id' locally, let the backend handle it
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myNewItem),
      });
  
      if (!response.ok) throw new Error('Failed to add item');
      const savedItem = await response.json(); // Get the item saved on the server (with the backend-assigned ID)
      const updatedItems = [...items, savedItem]; // Update state with server data
      setAndSaveItems(updatedItems);
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };
  

  const handleChecked = async (id) => {
    const itemToUpdate = items.find((item) => item.id === id);
  
    if (!itemToUpdate) return; // Exit if the item doesn't exist
  
    const updatedItem = { ...itemToUpdate, checked: !itemToUpdate.checked }; // Toggle 'checked'
  
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT', // Or 'PATCH', depending on your API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
  
      if (!response.ok) throw new Error('Failed to update item');
  
      const updatedItems = items.map((item) =>
        item.id === id ? updatedItem : item
      );
  
      setAndSaveItems(updatedItems); // Update state after successful update
    } catch (error) {
      console.error('Error updating item:', error.message);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the server
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) throw new Error('Failed to delete item');
  
      // Update state locally after successful deletion
      const listItem = items.filter((item) => item.id !== id);
      setAndSaveItems(listItem);
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setNewItems("");
  };

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchCom search={search} setSearch={setSearch} />
      <AddItems
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
        newItem={newItems}
      />
      {filteredItems.length ? (
        <ul>
          {filteredItems.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleChecked(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChecked(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: "2rem" }}>Your list is empty</p>
      )}
    </div>
  );
};

export default Content;
