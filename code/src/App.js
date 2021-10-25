import React, { useState, useEffect } from "react";
import moment from "moment";

import { API_URL } from "./utilis/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []); //the empty array shows that the code should only be rendered one time

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  console.log(thoughts);
  return (
    //rerendered to get our thought array
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">type your though</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button>Send thought!</button>
      </form>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button>&hearts; {thought.hearts}</button>
          <p className="date">
            Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};
