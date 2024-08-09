import React, { useState } from "react";
import './App.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {
            data.filter((val) => {
              if (searchTerm === "") {
                return true; // Return true to include this item in the filtered results
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true; // Return true to include this item if it matches the search term
              }
              return false; // Return false to exclude this item
            }).map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
  
