import FETCH_SEARCH_REQUEST from '../constants/search';

const fetchSearchRequest = query => ({
  type: FETCH_SEARCH_REQUEST,
  payload: { query },
});

const fetchSearch = query => (
  (dispatch) => {
    dispatch(fetchSearchRequest(query));
  }
);

export default fetchSearch;
