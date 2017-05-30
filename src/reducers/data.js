import {
  FETCH_DATA,
} from './../actions/types';

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
