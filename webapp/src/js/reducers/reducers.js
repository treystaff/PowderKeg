import { combineReducers } from 'redux-immutable';

function firstReducer (state = 1, action) {
  switch (action.type) {
  case 'FIRST':
    return 1;
  default:
    return state;
  }
}

const reducers = combineReducers({
  firstReducer
});

export default reducers;
