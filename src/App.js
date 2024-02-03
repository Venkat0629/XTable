import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSort = (e) => {
    const id = e.target.id;
    let sortedData = [...data];
    if (id === "date") {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (id === "views") {
      sortedData.sort((a, b) => b.views - a.views);
    }
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button id="date" onClick={handleSort}>
          Sort by Date
        </button>
        <button id="views" onClick={handleSort}>
          Sort by Views
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
