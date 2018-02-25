import React from "react";

import Input from "./Input";

import "./Search.css";

const Search = ({ onChange }) => (
  <div className="Search">
    <Input
      label="Choose attacking type..."
      onChange={value => onChange({ searchId: "attack", value })}
    />
    <Input
      label="Choose defending type..."
      onChange={value => onChange({ searchId: "defender", value })}
    />
  </div>
);

export default Search;
