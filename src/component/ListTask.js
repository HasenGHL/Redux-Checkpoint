import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

function ListTask({ tasks, filter }) {
  return (
    <ul>
      {tasks
        .filter((task) => {
          if (!filter) return true;
          return filter === "done" ? task.isDone : !task.isDone;
        })
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps)(ListTask);
