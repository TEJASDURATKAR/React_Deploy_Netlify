import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function FetchParent() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users"); // Default request type
  const [items, setItems] = useState([]); // Fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null); // Reset error before fetch
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <List items={items} />
    </div>
  );
}

export default FetchParent;
