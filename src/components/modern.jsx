import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MockData from "./MockData.jsx";

function Modern() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const filteredData = MockData.filter((item) => {
    if (inputText === "") {
      return true;
    }
    return item.text.toLowerCase().includes(inputText);
  });

  return (
    <div className="content">
      <div id="modern">
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

      <ul id="listModern">
        {filteredData.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <h3>Study Highlights</h3>
      <table>
        <thead>
          <tr>
            <th>Study Title</th>
            <th>Topic</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Science of Meditation</td>
            <td>General Benefits</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Mindfulness of breathing, how does it affect cardio metabolic health?</td>
            <td>Cardiovascular Health</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Does walking meditation help anxiety? A long term study</td>
            <td>Mental Health</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Is Yoga good for arthritis?</td>
            <td>Joint Health</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>How important is stretching for elderly meditators?</td>
            <td>Aging</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Zen, a 20 year study</td>
            <td>Philosophy</td>
            <td>2015</td>
          </tr>
          <tr>
            <td>Surya Namaskar for joint mobility in older adults</td>
            <td>Mobility</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Sun Salutations as a method of helping people get more exercise, a study</td>
            <td>Fitness</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>A 30 year study on the benefits of vipassana for stress levels</td>
            <td>Stress Reduction</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Mindfulness in daily life compared to control, a meta study</td>
            <td>Daily Practice</td>
            <td>2020</td>
          </tr>
        </tbody>
      </table>
      {/* Added a table using my mock data as per final project requirements for including a table*/}
    </div>
  );
}

export default Modern;
