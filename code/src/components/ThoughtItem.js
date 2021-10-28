import React from "react";
import "./thoughtItem.css";

import moment from "moment";

const ThoughtItem = ({ thought, onLinkesIncrease }) => {
  //Props
  return (
    <div className="container">
    <div className="item-container">
      <p className="thought-input">{thought.message}</p>
      <button
        onClick={() => onLinkesIncrease(thought._id)}
        className="likes-button"
      >
        {" "}
        <div className="button-container">
          <p className="heart">&#10084;&#65039;</p>{" "}
          <p className="likes-amount">x {thought.hearts}</p>
        </div>
      </button>
      <p className="date">{moment(thought.createdAt).fromNow()}</p>
    </div>
  </div>
  );
};

export default ThoughtItem;
