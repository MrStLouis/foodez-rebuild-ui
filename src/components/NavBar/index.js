import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import LoginModal from '../../containers/LoginModal';

class NavBar extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = (isValid) => {
    console.log(isValid);
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <div className={this.props.className}>
        <AppBar
          title="FoodEZ"
          iconElementRight={
            this.props.auth.status === 'AUTH_LOGGED_IN' ?
              <FlatButton
                label={this.props.auth.username}
              /> :
              <FlatButton
                label="Login"
                onClick={this.openModal}
              />
          }
        />
        <LoginModal
          open={this.state.isModalOpen}
          handleClose={this.closeModal}
        />
      </div>
    );
  }
}

export default NavBar;
