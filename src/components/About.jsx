import Statue from "../assets/Statue.jpg"
import texts from "../assets/texts.jpg"

function About() {
  return (
    <div className="content">
      <div id="About">
        <div className="imagesAbout">
          <img src={Statue} className="statue" alt="a statue of meditating person" />
          <img src={texts} className="texts" alt="a stack of ancient looking texts" />
        </div>
        <h5 id="aboutHeading">The Stress Cure is Your Core Resource for Finding Peace</h5>
        <p>
          Here you will find searchable databases where can be found a wealth of information
          on the practice of meditation...
        </p>
        <p>
          On the Modern page you will find similar for modern texts. These include studies
          demonstrating the benefits of meditation, articles discussing how meditation helps
          modern life, and general information by today's preeminent meditation experts.
        </p>
      </div>
    </div>
  );
}

export default About;
