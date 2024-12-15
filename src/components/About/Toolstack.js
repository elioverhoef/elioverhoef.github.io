import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiNotion,
  SiClaude,
  SiTicktick,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClaude />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTicktick />
      </Col>
    </Row>
  );
}

export default Toolstack;
