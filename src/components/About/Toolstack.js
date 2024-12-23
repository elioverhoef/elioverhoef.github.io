import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiNotion, SiClaude, SiTicktick } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          <DiVisualstudio />
          <p className="tech-label">VS Code</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
          <SiPostman />
          <p className="tech-label">Postman</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.notion.so/" target="_blank" rel="noreferrer">
          <SiNotion />
          <p className="tech-label">Notion</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://claude.ai/" target="_blank" rel="noreferrer">
          <SiClaude />
          <p className="tech-label">Claude AI</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://ticktick.com/" target="_blank" rel="noreferrer">
          <SiTicktick />
          <p className="tech-label">TickTick</p>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
