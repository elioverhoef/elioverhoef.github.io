import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>© {new Date().getFullYear()} Elio Verhoef</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/elioverhoef"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elio-verhoef-699462291/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@elio.verhoef"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMediumM />
                </a>
              </li>
            </ul>
          </Col>
          <Col md="4" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
