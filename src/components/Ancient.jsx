import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MockData2 from "./MockData2.jsx"
import texts from "../assets/texts.jpg"


//material UI is a react ui library that allows for this search bar functionality imported here

function Ancient() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const dataFiltrado = MockData2.filter(item => {
    if (inputText === "") {
      return true;
    }
    return item.text.toLowerCase().includes(inputText);
  });

  return (
<div className="App">
    <div className = "content">
    <div id ="Ancient">
      <h2>Search Our database of Ancient texts</h2>
    
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
      <ul id = "listAncient">
        {dataFiltrado.map(item => (
          <li key={item.id}>
              {item.text}
            
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
}

export default Ancient;
