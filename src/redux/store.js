import {legacy_createStore as createStore, combineReducers} from 'redux';

// Selectors: sélectionner une partie de notre store

// Actions: fonction qui renvoient un objet aux reducers -> { type: MON_ACTION, payload: { DATA } }

// Reducers: fonctions retournent un nouveau state

const initialState = [{id: 1, title: 'Init task', isCompleted: false}];

const tasksList = (state = initialState, action) => {
  switch (action.type) {
    // case value:
    // modifs
    //break;
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  tasksList,
});

// Store: attaché à notre appli React -> accessible depuis tous les composants
export const store = createStore(rootReducers);
