import React from "react";
import "./thoughtItem.css";

import moment from "moment";

const ThoughtItem = ({ thought, onLinkesIncrease }) => {
  //Props
  return (
    <div>
      <p>{thought.message}</p>
      <button onClick={() => onLinkesIncrease(thought._id)}>
        {" "}
        &hearts; {thought.hearts}
      </button>
      <p className="date">
        - Created at: {moment(thought.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default ThoughtItem;
