import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNotion,
  SiOpenai,
  SiTicktick,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTicktick />
      </Col>
    </Row>
  );
}

export default Toolstack;
