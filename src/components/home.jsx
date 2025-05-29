import { useState } from "react";

function Home() {
  const [choiceUserMakes, afterUserSelects] = useState([]);
  const [givenIdeasForUser, setIdea] = useState("");

  const meditationTypes = [
   
    "Vipassana", "Jhana"
    ,
    "Mindfulness" ]
  ;
//the following is the if/else statements and event handlers that handle the user interaction with the home page question interface
  const handlingFor = (event) => {
    const value = event.target.value;
    afterUserSelects((prev) =>

      {
     if  (prev.includes(value)){
      return prev.filter((item) => item !== value);
     } else {
      return [...prev, value]
     }
    
  });
  };

  const submitting = () => {  
  if (choiceUserMakes.length === 0) {
   return;
  } else if (
    choiceUserMakes.includes("Vipassana") &&
    choiceUserMakes.includes("Jhana") &&
    choiceUserMakes.includes("Mindfulness")
  ) {
    setIdea(`Please see the pages on Modern and Ancient where you will find articles on Mindfulness, Vipassana and Jhana, such as "Mindfulness of Breahing: A Beginner's Guide", and "A 30 year study on the benefits of vipassana for stress levels", as well as "The Practice of Jhana" .`);
  } else if (
    choiceUserMakes.includes("Vipassana") &&
    choiceUserMakes.includes("Jhana")
  ) {
   setIdea(`Please see the pages on Modern and Ancient where you will find articles on Vipassana and Jhana, such as "Instructions for Vipassana", and "The Science of Meditation`);
  } else if (
    choiceUserMakes.includes("Mindfulness") &&
    choiceUserMakes.includes("Jhana")
  ) {
    setIdea(`We recommend you read "Mindfulness of breathing, how does it affect cardio metabolic health?" and "The practice of Jhana" on these topics. They can be found on the modern and ancient pages."`);
  } else if (
    choiceUserMakes.includes("Vipassana") &&
    choiceUserMakes.includes("Mindfulness")
  ) {
    setIdea(`The articles on "Mindfulness of breathing, how does it affect cardio metabolic health?" and "Instructions for Vipassana" in Modern and Ancient will likely be useful for you.`);
  } else if (choiceUserMakes.includes("Jhana")) {
    setIdea(`The "The practice of Jhana" article on Ancient and the "The Science of Meditation" on Modern will be great choices for you to learn more.`);
  } else if (choiceUserMakes.includes("Vipassana")) {
    setIdea(`The "A 30 year study on the benefits of vipassana for stress levels" article on Modern and the "Instructions for Vipassana" Ancient is a wonderful beginning point.`);
  } else if (choiceUserMakes.includes("Mindfulness")) {
    setIdea(`Reading about "Mindfulness in daily life compared to control, a meta study" on the Modern and "Mindfulness of breathing: A Beginner's Guide" on the Ancient page articles is a great start.`);
  } else {
    setIdea("Reading articles V, M and J on the Modern and Ancient pages will give you a lot of useful information.");
  }

};

//this is the actual user interface section that holds the code for the checkboxes and submit button
  return (
  <div className = "App"> 
    <div className = "content">
    <div className="home">
      <h2>The Stress Cure</h2><p>Bringing the Mind Home</p><p>Pick your favored combination of meditation techniques</p>

      <form>


        {meditationTypes.map((picked) => (<div key={picked}>


            <label>
              <input
                type="checkbox"
                value={picked}
                checked={choiceUserMakes.includes(picked)}
                onChange={handlingFor}></input>
              {picked}
            </label>
          </div>
        ))}
      </form>

      <button type="button" onClick={submitting}>
        Submit
      </button>

      {givenIdeasForUser && (
        <div id = "ideas">
          {givenIdeasForUser}
        </div>
        
      )}
    </div>
    </div>
    </div>
  );
}

export default Home;
