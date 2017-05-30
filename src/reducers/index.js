import { combineReducers } from 'redux';

import dataReducer from './data.js';

const rootReducer = combineReducers({
  data:dataReducer,
});

export default rootReducer;
