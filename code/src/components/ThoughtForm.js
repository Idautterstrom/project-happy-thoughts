import React from "react";
import "./thoughtForm.css";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  //Props
  return (
    <form onSubmit={onFormSubmit} className="form-container">
      <label htmlFor="newThought" className="heading">
        What's making you happy right now?
      </label>
      <input
        className="input-container"
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button
        disabled={newThought.length < 5}
        type="submit"
        className="submit-button"
      >
        &#10084;&#65039; Send Happy Thought &#10084;&#65039;
      </button>
    </form>
  );
};

export default ThoughtForm;
