import React, { useEffect, useState } from "react";
import "./Snow.css";

function Snow() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate random initial positions for snowflakes
    const flakes = [...Array(150)].map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      animationDelay: `-${Math.random() * 10}s`
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay
          }}
        />
      ))}
    </div>
  );
}

export default Snow; 