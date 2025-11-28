import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaMediumM } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BUILDING THE <span className="purple">FUTURE</span> OF HEALTH
            </h1>
            <p className="home-about-body">
              I'm the <b className="purple">Co-Founder & CTO</b> of{" "}
              <a
                href="https://longevai.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="purple">LongevAI</b>
              </a>
              , where we're combining <b className="purple">AI Agents</b>,{" "}
              <b className="purple">Longevity Science</b>, and{" "}
              <b className="purple">Personalized Medicine</b> to help people
              live longer, healthier lives.
              <br />
              <br />
              We partner with preventive health clinics and researchers to build
              scalable AI systems that move us closer to{" "}
              <b className="purple">longevity escape velocity</b>.
              <br />
              <br />
              Previously, I built{" "}
              <a href="https://projectcodr.ai" target="_blank" rel="noreferrer">
                <b className="purple">ProjectCodr</b>
              </a>
              , a VS Code extension for developers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Let's talk about{" "}
              <span className="purple">
                AI, longevity, and building the future of health
              </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elioverhoef"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elio-verhoef-699462291/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@elio.verhoef"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMediumM />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
