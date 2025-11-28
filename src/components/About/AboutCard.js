import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Elio Verhoef</span>, Co-Founder & CTO
            of{" "}
            <a
              href="https://longevai.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="purple">LongevAI</span>
            </a>
            , based in <span className="purple">The Netherlands</span>.
            <br />
            <br />
            With a foundation in Computer Science and Information Science (Cum
            Laude, Utrecht University), I'm now focused on building AI systems
            that extend human healthspan.
            <br />
            <br />
            Previously, I built{" "}
            <a href="https://projectcodr.ai" target="_blank" rel="noreferrer">
              <span className="purple">ProjectCodr</span>
            </a>
            , a VS Code extension for developers.
            <br />
            <br />
            My current focuses:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Scalable AI Systems for Healthcare
            </li>
            <li className="about-activity">
              <ImPointRight /> Longevity Research & Biohacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Distance Running & Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source & Developer Tooling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
