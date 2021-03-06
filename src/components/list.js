import React, {Component, PropTypes} from "react";
import orderBy from "lodash/orderBy";
import memoize from "lru-memoize";

import RaisedButton from "material-ui/RaisedButton";

import data from "../data";
import UserList from "./user-list";
import Pagination from "./pagination";

const memoized = memoize(1000)(orderBy);

class List extends Component {
  constructor() {
    super();

    this.state = {
      users: null,
      key: "name",
      direction: "asc",
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

  render() {
    const {users, key, direction, offset, perPage} = this.state;

    const start = performance.now();
    const orderedUsers = this.props.memo ? memoized(users, key, direction) : orderBy(users, key, direction);
    const end = performance.now() - start;

    const slicedData = orderedUsers.slice(offset, offset + perPage);

    return (
      <div className="content-page">
        <h2>{this.props.title}</h2>
        <div>
          <p>Order by:</p>
          <RaisedButton
            onClick={() => this.setState({key: "name"})}
            disabled={this.state.key === "name"}
            primary
            label="name" />
          <RaisedButton
            onClick={() => this.setState({key: "email"})}
            disabled={this.state.key === "email"}
            primary
            label="email" />
          <p>Direction:</p>
          <RaisedButton
            onClick={() => this.setState({direction: "asc"})}
            disabled={this.state.direction === "asc"}
            primary
            label="ASC"
          />
          <RaisedButton
            onClick={() => this.setState({direction: "desc"})}
            disabled={this.state.direction === "desc"}
            primary
            label="DESC"
          />
        </div>
        <h3>TIMER: {end} milliseconds</h3>
        <UserList users={slicedData} />
        <Pagination
          max={orderedUsers.length}
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
