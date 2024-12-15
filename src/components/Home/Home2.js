import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm Elio! I'm passionate about optimizing human potential through technology and health innovations.
              <br />
              <br />
              I combine my expertise in <b className="purple">AI development</b> with deep knowledge of{" "}
              <b className="purple">health optimization and longevity</b> to create impactful solutions.
              <br />
              <br />
              My current focus includes{" "}
              <i>
                <b className="purple">
                  AI development, health optimization research, and running 👟
                </b>
              </i>
              <br />
              <br />
              I'm working on <a href="https://projectcodr.ai" target="_blank" rel="noreferrer"><b className="purple">ProjectCodr</b></a>, an innovative VS Code extension, while {" "}
              <b className="purple">running, meditation, and optimized nutrition</b>.
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
              Let's share ideas about <span className="purple">technology, health optimization, and personal growth</span>
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
                  <FaLinkedinIn />
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