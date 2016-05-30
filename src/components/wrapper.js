import React, {PropTypes} from "react";
import {Link} from "react-router";

const Wrapper = ({children}) => (
  <div>
    <h1>LABORATION</h1>
    <div>
      <Link to="list" >List</Link>
      <Link to="list2">List 2</Link>
    </div>
    <div>{children}</div>
  </div>);
Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
