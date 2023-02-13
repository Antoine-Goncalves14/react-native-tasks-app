import {legacy_createStore as createStore} from 'redux';

import {rootReducers} from './reducers';

// Store: attaché à notre appli React -> accessible depuis tous les composants
export const store = createStore(rootReducers);
