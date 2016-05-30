import React from "react";
import {render} from "react-dom";
import {IndexRoute, Router, Route, hashHistory} from "react-router";

import Wrapper from "./components/wrapper";
import Welcome from "./components/welcome";
import Plain from "./components/plain";
import Memoized from "./components/memoized";

render(
  <Router
    history={hashHistory}
  >
    <Route path="/" component={Wrapper}>
      <IndexRoute component={Welcome} />
      <Route path="plain" component={Plain} />
      <Route path="memoized" component={Memoized} />
    </Route>
  </Router>,
  document.getElementById("root")
);
