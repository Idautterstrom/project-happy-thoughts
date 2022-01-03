import React from "react";
import "./thoughtForm.css";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
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
        <span role="img" area-label="heart">
          &#10084;&#65039;
        </span>{" "}
        Send Happy Thought{" "}
        <span role="img" area-label="heart">
          &#10084;&#65039;
        </span>
      </button>
    </form>
  );
};

export default ThoughtForm;
