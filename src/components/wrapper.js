import React, {PropTypes} from "react";
import {Link} from "react-router";

const Wrapper = ({children}) => (
  <div>
    <h1>LABORATION</h1>
    <ul>
      <li>
        <Link to="list" >Not memoized</Link>
      </li>
      <li>
        <Link to="list2">Memoized</Link>
      </li>
    </ul>
    <div>{children}</div>
  </div>);
Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
