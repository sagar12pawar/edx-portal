import FETCH_SEARCH_REQUEST from '../constants/search';
import fetchEnterpriseList from '../actions/enterpriseList';

const fetchSearchRequest = query => ({
  type: FETCH_SEARCH_REQUEST,
  payload: { query },
});


function fetchQueryDict(query) {
  const queryToDict = { search: query };
  return queryToDict;
}

const fetchSearch = query => (
  (dispatch) => {
    dispatch(fetchSearchRequest(query));
    dispatch(fetchEnterpriseList(fetchQueryDict(query)));
  }
);

export default fetchSearch;
