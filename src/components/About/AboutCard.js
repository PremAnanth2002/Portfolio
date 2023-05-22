import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings!, I'm<span className="purple"> Prem Ananth </span>
            from <span className="purple"> Saveetha Engineering college, Chennai .</span>
            <br />, a passionate third-year Information Technology student at Saveetha Engineering College in Chennai. Alongside my academic pursuits, I thrive on the creative challenges of web development and the immersive realms of AR/VR technology.

Through captivating projects, I blend innovation, aesthetics, and functionality in web development. Simultaneously, I explore the transformative potential of AR/VR, pushing the boundaries of possibility.

Join me, Prem Ananth, on an exhilarating career journey where I merge cutting-edge technology with imaginative experiences. Together, let's create mesmerizing digital worlds that blur the line between reality and imagination.





            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
