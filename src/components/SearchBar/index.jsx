import React from 'react';
import PropTypes from 'prop-types';
import { SearchField } from '@edx/paragon/static';
import '@edx/paragon/static/paragon.min.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQueryChange(query) {
    this.setState({
      query: query.trim(),
    });
  }

  handleSubmit() {
    const { query } = this.state;
    this.props.fetchSearch(query);
  }

  render() {
    return (
      <SearchField
        onSubmit={this.handleSubmit}
        onChange={this.handleQueryChange}
        placeholder="Search for Enterprise"
      />
    );
  }
}

SearchBar.defaultProps = {
  fetchSearch: () => {},
};

SearchBar.propTypes = {
  fetchSearch: PropTypes.func,
};

export default SearchBar;
