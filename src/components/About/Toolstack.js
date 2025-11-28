import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiTypescript,
  SiOpenai,
  SiClaude,
  SiDocker,
  SiAmazon,
} from "react-icons/si";
import { DiReact } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://python.org/" target="_blank" rel="noopener noreferrer">
          <SiPython />
          <p className="tech-label">Python</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript />
          <p className="tech-label">TypeScript</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <DiReact />
          <p className="tech-label">React</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
          <SiOpenai />
          <p className="tech-label">OpenAI</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
          <SiClaude />
          <p className="tech-label">Claude</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://docker.com/" target="_blank" rel="noopener noreferrer">
          <SiDocker />
          <p className="tech-label">Docker</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAmazon />
          <p className="tech-label">AWS</p>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
