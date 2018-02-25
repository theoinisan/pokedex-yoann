import React from "react";

import Bubble from "./Bubble";
import bubbles from "./bubbles-list";

import "./BubbleList.css";

const getStyle = index => {
  const div = 360 / bubbles.length;
  const x = Math.sin(div * index * (Math.PI / 180)) * 220;
  const y = Math.cos(div * index * (Math.PI / 180)) * 220;
  return {
    top: x + 220 + "px",
    left: y + 220 + "px"
  };
};

const BubbleList = ({ activeBubbles }) => (
  <div className="BubbleList">
    {bubbles.map((bubble, index) => (
      <div
        key={bubble.name}
        className="BubbleList__item"
        style={getStyle(index)}
        onClick={() => console.log(bubble.name)}
      >
        <Bubble
          icon={`/assets/${bubble.name}.png`}
          color={bubble.color}
          active={activeBubbles[bubble.name]}
        />
      </div>
    ))}
  </div>
);

BubbleList.defaultProps = {
  activeBubbles: {}
};

export default BubbleList;
