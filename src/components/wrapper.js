import React from "react";
import {Link} from "react-router";

export default ({children}) => (
  <div>
    <h1>LABORATION</h1>
    <div>
      <Link to="list" >List</Link>
      <Link to="list2">List 2</Link>
    </div>
    <div>{children}</div>
  </div>);
