import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mindmappr from "../../Assets/Projects/mindmappr.png";
import pomodoro from "../../Assets/Projects/pomodoro.png";
import projectcodr from "../../Assets/Projects/projectcodr.png";
import w11ultimate from "../../Assets/Projects/w11ultimate.png";
import yt2blog from "../../Assets/Projects/yt2blog.png";

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
              imgPath={mindmappr}
              isBlog={false}
              title="Mindmappr AI"
              description="Creating automatic mindmaps to inspire creativity."
              ghLink="http://mindmappr.ai/"
              demoLink="http://mindmappr.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectcodr}
              isBlog={false}
              title="ProjectCodr AI"
              description="Create entire software projects automatically with AI! Make your programming project in any language, without writing a single line of code."
              ghLink="http://projectcodr.ai/"
              demoLink="http://projectcodr.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt2blog}
              isBlog={false}
              title="YouTube to Blog (YT2Blog.com)"
              description="YT2Blog AI converts your YouTube videos into written blogs, matching your preferred writing style. It uses video transcripts and an optional example blog for guidance."
              ghLink="https://www.yt2blog.com/"
              demoLink="https://www.yt2blog.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              isBlog={false}
              title="Pomodoro Timer"
              description="Simple pomodoro timer for 50 minutes work sessions. The app has an option for binaural beats during the timer."
              ghLink="https://github.com/elioverhoef/pomodoro"
              demoLink="https://github.com/elioverhoef/pomodoro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w11ultimate}
              isBlog={false}
              title="Windows 11 Ultimate"
              description="Windows 11 Ultimate is a customized Windows installation made to maximize performance, protect your privacy, and deliver a smooth experience."
              ghLink="http://w11ultimate.com/"
              demoLink="http://w11ultimate.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;