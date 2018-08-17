import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import fetchSearch from '../../data/actions/search';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSearch: (query) => {
    dispatch(fetchSearch(query));
  },
});

const Search = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default Search;
