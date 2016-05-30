import React, {Component} from "react";
import orderBy from "lodash/orderBy";
import data from "../data";

import UserList from "./user-list";

class NormalList extends Component {
  constructor() {
    super();

    this.state = {
      users: null,
      key: "name",
      direction: "asc"
    };
  }

  componentWillMount() {
    this.setState({users: JSON.parse(data)});
  }

  render() {
    const {users, key, direction} = this.state;

    const start = performance.now();
    const orderedUsers = orderBy(users, key, direction);
    const end = performance.now() - start;

    return (
      <div>
        <h2>Not memoized</h2>
        <button onClick={() => this.setState({key: "name"})} disabled={this.state.key === "name"}>name</button>
        <button onClick={() => this.setState({key: "address"})} disabled={this.state.key === "address"}>address</button><br/>
        <button onClick={() => this.setState({direction: "asc"})} disabled={this.state.direction === "asc"}>ASC</button>
        <button onClick={() => this.setState({direction: "desc"})} disabled={this.state.direction === "desc"}>DESC</button>
        <h3>TIMER: {end} milliseconds</h3>
        <UserList users={orderedUsers} />
      </div>
    );
  }
}

export default NormalList;
