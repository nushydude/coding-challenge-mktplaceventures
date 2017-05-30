import {
  FETCH_DATA,
  REMOVE_ITEM,
  ADD_ITEM,
} from './../actions/types';

const INITIAL_STATE = {
  items: [],
};

const sortByTimeDsc = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, items: action.payload.sort(sortByTimeDsc) };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
                          .sort(sortByTimeDsc),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload).sort(sortByTimeDsc),
      };
    default:
      return state;
  }
}
