import React, { useEffect, useState } from "react";
import "./Snow.css";

function Snow() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [showSnow, setShowSnow] = useState(() => {
    const saved = localStorage.getItem("showSnow");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check if current month is between November and March (0-based months: 10-11, 0-2)
    const currentMonth = new Date().getMonth();
    return currentMonth >= 10 || currentMonth <= 2;
  });

  useEffect(() => {
    if (showSnow) {
      // Generate random initial positions for snowflakes
      const flakes = [...Array(150)].map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 10}s`
      }));
      setSnowflakes(flakes);
    } else {
      setSnowflakes([]);
    }
  }, [showSnow]);

  useEffect(() => {
    localStorage.setItem("showSnow", JSON.stringify(showSnow));
  }, [showSnow]);

  const toggleSnow = () => {
    setShowSnow(!showSnow);
  };

  return (
    <>
      <button
        onClick={toggleSnow}
        className="snow-toggle"
        aria-label={showSnow ? "Turn off snow" : "Turn on snow"}
        title={showSnow ? "Turn off snow" : "Turn on snow"}
      >
        ❄️
      </button>
      {showSnow && (
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
      )}
    </>
  );
}

export default Snow; 