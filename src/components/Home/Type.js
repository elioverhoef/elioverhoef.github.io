import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Developer & Innovator",
          "Health & Fitness Enthusiast",
          "Lifelong Learner",
          "Joy Spreader",
          "ProjectCodr Creator",
          "Meditation",
          "Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;