import React from "react";
import {Route, IndexRoute} from "react-router";

import Wrapper from "./components/wrapper";
import Welcome from "./components/welcome";
import List from "./components/list";
import List2 from "./components/list2";

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Welcome} />
    <Route path="/list" component={List} />
    <Route path="/list2" component={List2} />
  </Route>
);
