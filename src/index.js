import React from "react";
import {render} from "react-dom";
import {IndexRoute, Router, Route, hashHistory} from "react-router";

import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import Wrapper from "./components/wrapper";
import Welcome from "./components/welcome";
import PlainOrdering from "./components/plain";
import MemoizedOrdering from "./components/memoized";
import PlainSearch from "./components/plain-search";
import MemoizedSearch from "./components/memoized-search";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router
      history={hashHistory}
    >
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Welcome} />
        <Route path="plain-ordering" component={PlainOrdering} />
        <Route path="memoized-ordering" component={MemoizedOrdering} />
        <Route path="plain-search" component={PlainSearch} />
        <Route path="memoized-search" component={MemoizedSearch} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById("root")
);
