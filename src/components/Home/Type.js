import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Co-Founder & CTO @ LongevAI",
          "AI Architect & Engineer",
          "Longevity Science Enthusiast",
          "Building Autonomous Agents",
          "System Optimizer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
