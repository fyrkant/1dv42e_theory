import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class Wrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="main-wrapper">
        <AppBar
          title="Memoization Demo"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
              <h4 className="drawer-header">List ordering:</h4>
              <Link to="plain-ordering" ><MenuItem>Plain</MenuItem></Link>
              <Link to="memoized-ordering"><MenuItem>Memoized</MenuItem></Link>
              <h4 className="drawer-header">List search:</h4>
              <Link to="plain-search" ><MenuItem>Plain</MenuItem></Link>
              <Link to="memoized-search"><MenuItem>Memoized</MenuItem></Link>
        </Drawer>

        <div className="content-wrapper">{this.props.children}</div>
      </div>
    );
  }
}
Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
