import React from "react";

import "./Bubble.css";

const Bubble = ({ color, icon, active }) => (
  <div
    className="BubbleBorder"
    style={{ borderColor: active ? "white" : "transparent" }}
  >
    <div style={{ backgroundColor: color }} className="Bubble">
      <img src={icon} />
    </div>
  </div>
);

export default Bubble;
