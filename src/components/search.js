import React, {Component, PropTypes} from "react";
import debounce from "lodash/debounce";
import memoize from "lru-memoize";

import {filterObjects} from "../utils/filter";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import data from "../data";
import UserList from "./user-list";
import Pagination from "./pagination";

const buttonStyle = {marginLeft: 5};

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
    const searchTerm = this.refs.searchBox.input.value;
    this.setState({searchTerm: searchTerm});
  }

  emptySearch(e) {
    e.preventDefault();
    this.setState({searchTerm: null});
    this.refs.searchBox.input.value = "";
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
      <div className="content-page">
        <h2>{title}</h2>
        <h3>TIMER: {end} milliseconds</h3>
        <div style={{alignSelf: "center"}}>
          <TextField floatingLabelText="Search users" ref="searchBox" />
          <RaisedButton
            label="Search"
            primary
            onTouchTap={this.search.bind(this)}
            style={buttonStyle}
          />
          <RaisedButton
            label="Clear"
            secondary
            onTouchTap={this.emptySearch.bind(this)}
            style={buttonStyle}
          />
        </div>
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
