import React from "react";
import './Table.css'

function List({ items }) {
  if (items.length === 0) return <p>No data to display</p>;

  // Extract table headers dynamically from the first item's keys
  const headers = Object.keys(items[0]);

  return (
    <div style={{ overflowX: "auto" }}> {/* To handle overflow for large tables */}
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => (
                <td
                  key={header}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {typeof item[header] === "object"
                    ? JSON.stringify(item[header])
                    : item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
