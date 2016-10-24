import React from 'react'

const Controller = ({ name, updateValue, filterValue, onArrowClick }) => {
  return (
    <div className="control flex-between">
      <div className="control-value-container">
        <h4>{name}</h4>
        <span className="control-value">{filterValue}</span>
      </div>
      <div className="arrows">
        <div
          className="arrow-up"
          onClick={() => onArrowClick(name, updateValue, "up")}
          ></div>
        <hr />
        <div
          className="arrow-down"
          onClick={() => onArrowClick(name, updateValue, "down")}
          ></div>
      </div>
    </div>
  );
};

export default Controller
