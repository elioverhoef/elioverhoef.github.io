import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Elio Verhoef</span>, a developer and health optimization enthusiast from{" "}
            <span className="purple">The Netherlands</span>.
            <br />
            <br />
            I graduated Cum Laude from Utrecht University with dual degrees in Computer Science and Information Science.
            <br />
            <br />
            Currently, I'm focused on developing <a href="https://projectcodr.ai" target="_blank" rel="noreferrer"><span className="purple">ProjectCodr</span></a> while pursuing excellence in personal health optimization through disciplined daily practices.
            <br />
            <br />
            My core focuses include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running (Working towards sub-18 5K)
            </li>
            <li className="about-activity">
              <ImPointRight /> Daily Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimized Sleep
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Longevity Research & Practice
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Choose things to enjoy, and enjoy the things you do"{" "}
          </p>
          <footer className="blockquote-footer">Elio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;