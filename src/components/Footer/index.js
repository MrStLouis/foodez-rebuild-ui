import React, { Component } from 'react';
import { Toolbar, FlatButton, ToolbarGroup, ToolbarSeparator } from 'material-ui';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  handleClick = (button) => { this.setState({ selected: button }); };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <FlatButton
            label="About"
            primary={this.state.selected === 'About'}
            onClick={() => { this.handleClick('About'); }}
          />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <FlatButton
            label="Contact"
            primary={this.state.selected === 'Contact'}
            onClick={() => { this.handleClick('Contact'); }}
          />
        </ToolbarGroup>

      </Toolbar>
    );
  }
}

export default Footer;
