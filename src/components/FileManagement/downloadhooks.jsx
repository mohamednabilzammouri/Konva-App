import React, { useState } from "react";
import "./styles.css";

export default function Downloadhooks() {
  const [data] = useState({
    id: 74,
    parentId: null,
    value: "",
    children: [
      {
        id: 62,
        parentId: 74,
        value: "Task 7",
        children: [
          {
            id: 56,
            parentId: 62,
            value: "Task 1",
          },
          {
            id: 63,
            parentId: 62,
            value: "Task 4",
          },
        ],
      },
      {
        id: 86,
        parentId: 74,
        value: "Task 8",
        children: [
          {
            id: 80,
            parentId: 86,
            value: "Task 5",
            children: [
              {
                id: 81,
                parentId: 80,
                value: "Task 2",
              },
              {
                id: 76,
                parentId: 80,
                value: "Task 3",
              },
            ],
          },
          {
            id: 87,
            parentId: 86,
            value: "Task 6",
          },
        ],
      },
    ],
  });

  console.log(data);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" onClick={exportData}>
        Export Data
      </button>
    </div>
  );
}
