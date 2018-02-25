import React from "react";

import "./Input.css";

const change = onChange => ({ target }) => {
  onChange(target.value);
};

const Input = ({ label, onChange }) => (
  <div className="Input">
    <input
      type="text"
      className="Input__input"
      required
      onChange={change(onChange)}
    />
    <span className="Input__label">{label}</span>
    <button type="submit" className="Input__search">
      <i className="fa fa-search">
        <img src="/assets/search.png" alt="Search icon" />
      </i>
    </button>
    <div className="Clear" />
  </div>
);

export default Input;
