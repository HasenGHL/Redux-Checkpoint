const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { id, description } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, { id, description, isDone: false }],
      };
    }
    case EDIT_TASK: {
      const { id, description } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, description } : task
        ),
      };
    }
    case TOGGLE_TASK: {
      const id = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    }
    default:
      return state;
  }
};
