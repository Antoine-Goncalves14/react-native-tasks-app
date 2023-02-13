import {legacy_createStore as createStore, combineReducers} from 'redux';

// Selectors: sélectionner une partie de notre store

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

// DELETE_TASK
const DELETE_TASK = 'DELETE_TASK';

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
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  tasksList,
});

// Store: attaché à notre appli React -> accessible depuis tous les composants
export const store = createStore(rootReducers);
