import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MockData from "./MockData.jsx"



function Modern() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const filteredData = MockData.filter(item => {
    if (inputText === "") {
      return true;
    }
    return item.text.toLowerCase().includes(inputText);
  });

  return (
    <div className = "content">
    <div id = "modern">
      <h2>Search Our database of studies</h2>

      <div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={inputHandler}
          value={inputText}
        />
      </div>
</div>
      <ul id = "listModern">
        {filteredData.map(item => (
          <li key={item.id}>
              {item.text}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Modern;
