import React, { useState } from "react";
import { connect } from "react-redux";

function Task({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: task.id,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        description,
      },
    });
    setIsEditing(false);
  };

  return isEditing ? (
    <li>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </li>
  ) : (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}

export default connect()(Task);
