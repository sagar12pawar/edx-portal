import FETCH_SEARCH_REQUEST from '../constants/search';

const search = (state = {
  query: null,
}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default search;
