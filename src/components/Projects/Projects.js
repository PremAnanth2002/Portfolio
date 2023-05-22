import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/man.png";
import Disease_Prediction from "../../Assets/Projects/Disease_Prediction.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Disease_Prediction}
              isBlog={false}
              title="Smart Disease Prediction"
              description="Developed a smart disease prediction system that uses supervised machine learning and deep
              learning to accurately predict the likelihood of an individual developing a certain disease. The
              system is trained on a large dataset of medical records and is capable of learning from the data to
              improve its accuracy over time."
              ghLink="https://github.com/PremAnanth2002/Smart-Disease-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a portfolio using React JS allows developers to showcase their skills and projects in a
              modern and dynamic way, utilizing its flexibility and scalability to build a visually appealing and
              highly functional portfolio."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
