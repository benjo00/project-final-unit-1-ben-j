import { useState } from "react";
import Button from "./Button";
// Home.jsx uses Button component as a child to meet project requirement

function Home() {
  const [choiceUserMakes, afterUserSelects] = useState([]);
  const [givenIdeasForUser, setIdea] = useState("");

  const meditationTypes = ["Vipassana", "Jhana", "Mindfulness"];

  const handlingFor = (event) => {
    const value = event.target.value;
    afterUserSelects((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const submitting = () => {
    if (choiceUserMakes.length === 0) {
      setIdea("Please select at least one meditation type.");
      return;
    }

    if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Jhana") &&
      choiceUserMakes.includes("Mindfulness")
    ) {
      setIdea("Please see the pages on Modern and Ancient where you will find articles on all three techniques.");
    } else if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Jhana")
    ) {
      setIdea("Please see the pages on Modern and Ancient for articles on Vipassana and Jhana.");
    } else if (
      choiceUserMakes.includes("Mindfulness") &&
      choiceUserMakes.includes("Jhana")
    ) {
      setIdea("Recommended reading on Mindfulness and Jhana is available on Modern and Ancient pages.");
    } else if (
      choiceUserMakes.includes("Vipassana") &&
      choiceUserMakes.includes("Mindfulness")
    ) {
      setIdea("Find articles on Vipassana and Mindfulness on both content pages.");
    } else if (choiceUserMakes.includes("Jhana")) {
      setIdea("Articles on Jhana can be found on the Ancient and Modern pages.");
    } else if (choiceUserMakes.includes("Vipassana")) {
      setIdea("Vipassana articles are available on Ancient and Modern pages.");
    } else if (choiceUserMakes.includes("Mindfulness")) {
      setIdea("Mindfulness content is on both the Modern and Ancient pages.");
    }
  };

  return (
    <div className="App">
      <div className="content">
        <div className="home">
          <h2>The Stress Cure</h2>
          <p>Bringing the Mind Home</p>
          <p>Pick your favored combination of meditation techniques</p>

          <form>
            {meditationTypes.map((picked) => (
              <div key={picked}>
                <label>
                  <input
                    type="checkbox"
                    value={picked}
                    checked={choiceUserMakes.includes(picked)}
                    onChange={handlingFor}
                  />
                  {picked}
                </label>
              </div>
            ))}
          </form>

          <Button onClick={submitting} label="Submit" />

          {givenIdeasForUser && <div id="ideas">{givenIdeasForUser}</div>}
        </div>
      </div>
    </div>
  );
}

export default Home;
