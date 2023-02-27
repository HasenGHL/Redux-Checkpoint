import React, { useState } from "react";
import { connect } from "react-redux";

function AddTask({ dispatch }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        description,
        isDone: false,
      },
    });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default connect()(AddTask);
