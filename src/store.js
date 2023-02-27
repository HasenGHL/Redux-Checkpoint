import { createStore } from "redux";

const initialState = {
  tasks: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.description,
            };
          }
          return task;
        }),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          }
          return task;
        }),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer);
export default store;
