const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: id,
});
