import {ADD_TASK, DELETE_TASK, TOOGLE_TASK} from './actionsType';

// Actions: fonction qui renvoient un objet aux reducers -> { type: MON_ACTION, payload: { DATA } }

// ADD_Task
export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
}

// TOOGLE_TASK
export function toogleTask(id) {
  return {
    type: TOOGLE_TASK,
    payload: {
      id,
    },
  };
}

// DELETE_TASK
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}
