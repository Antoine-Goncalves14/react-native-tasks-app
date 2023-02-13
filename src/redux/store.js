import {legacy_createStore as createStore, combineReducers} from 'redux';

// Selectors: sélectionner une partie de notre store

export const getTasks = store => store.tasksList;
export const getCompletedTasks = store =>
  store.tasksList.filter(task => task.isCompleted);

// Actions: fonction qui renvoient un objet aux reducers -> { type: MON_ACTION, payload: { DATA } }

// ADD_Task
const ADD_TASK = 'ADD_TASK';

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
}

// TOOGLE_TASK
const TOOGLE_TASK = 'TOOGLE_TASK';

export function toogleTask(id) {
  return {
    type: TOOGLE_TASK,
    payload: {
      id,
    },
  };
}

// DELETE_TASK
const DELETE_TASK = 'DELETE_TASK';

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}

// Reducers: fonctions retournent un nouveau state

const initialState = [{id: 1, title: 'Init task', isCompleted: false}];

const tasksList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];

    case TOOGLE_TASK:
      let newState = [];

      state.forEach(task => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task,
            isCompleted: !task.isCompleted,
          });
          return;
        }

        newState.push(task);
      });

      return newState;

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  tasksList,
});

// Store: attaché à notre appli React -> accessible depuis tous les composants
export const store = createStore(rootReducers);
