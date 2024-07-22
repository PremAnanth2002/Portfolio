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
            <br />, a recent graduate with a passion for web development and a flair for design using Adobe Photoshop and Illustrator. During my time at Saveetha, I immersed myself in Information Technology, exploring the creative challenges of web development. I have a keen interest in merging cutting-edge technology with imaginative experiences to create captivating digital experiences.

Aside from coding, I also enjoy playing games and traveling, which fuel my creativity and broaden my perspective.




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
