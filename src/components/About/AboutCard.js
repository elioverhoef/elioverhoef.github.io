import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elio Verhoef </span>
            from <span className="purple"> The Netherlands.</span>
            <br />
            I am currently a graduate from Utrecht University with two Bachelor degrees.
            <br />
            I completed Bachelor Computer Science and Bachelor Information Science (both Cum laude).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Health Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Health Optimization
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to optimize everything!"{" "}
          </p>
          <footer className="blockquote-footer">Elio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;