import React, {PropTypes} from "react";
import {Link} from "react-router";

const Wrapper = ({children}) => (
  <div>
    <h1>LABORATION</h1>
    <ul>
      <li>
        List ordering: <Link to="plain-ordering" >Plain</Link> - <Link to="memoized-ordering">Memoized</Link>
      </li>
      <li>
        List search: <Link to="plain-search" >Plain</Link> - <Link to="memoized-search">Memoized</Link>
      </li>
    </ul>
    <div>{children}</div>
  </div>);
Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
