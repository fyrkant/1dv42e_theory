import React, {Component, PropTypes} from "react";
import debounce from "lodash/debounce";
import memoize from "lru-memoize";

import {filterObjects} from "../utils/filter";

import data from "../data";
import UserList from "./user-list";
import Pagination from "./pagination";

const memoized = memoize(1000)(filterObjects);

class List extends Component {
  constructor() {
    super();

    this.state = {
      users: null,
      searchTerm: null,
      offset: 0,
      perPage: 20
    };
  }

  componentWillMount() {
    this.setState({users: JSON.parse(data)});
  }

  changePage(change) {
    this.setState({offset: this.state.offset + change});
  }

  search() {
    const searchTerm = this.refs.searchBox.value;
    this.setState({searchTerm: searchTerm});
  }

  emptySearch(e) {
    e.preventDefault();
    this.setState({searchTerm: null});
    this.refs.searchBox.value = "";
  }

  render() {
    const {users, offset, perPage, searchTerm} = this.state;
    const {memo, title} = this.props;

    const filterFunc = memo ? memoized : filterObjects;

    const start = performance.now();
    const filteredUsers = searchTerm ? filterFunc(users, searchTerm) : users;
    const end = performance.now() - start;

    const slicedData = filteredUsers.slice(offset, offset + perPage);

    return (
      <div>
        <h2>{title}</h2>
        <h3>TIMER: {end} milliseconds</h3>
        <label htmlFor="search">Search users:</label>
        <input name="search" type="text" ref="searchBox" />
        <button onClick={this.search.bind(this)}>Search</button>
        <button onClick={this.emptySearch.bind(this)}>Clear</button>
        <UserList users={slicedData} />
        <Pagination
          max={filteredUsers.length}
          offset={offset}
          perPage={perPage}
          changePage={this.changePage.bind(this)}
        />
      </div>
    );
  }
}
List.propTypes = {
  memo: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default List;
