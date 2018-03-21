import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Dialog, TextField, FlatButton } from 'material-ui';

const {
  REST_URL = 'http://localhost:3420',
} = process.env;

class LoginModal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  state = {
    username: '',
    password: '',
  }
  loginUser = async () => {
    const { username, password } = this.state;
    this.props.openAuth();
    try {
      const { data } = await axios.post(
        `${REST_URL}/login`,
        { username, password },
        { withCredentials: true },
      );
      console.log(data);
      this.props.login(data);
      this.props.handleClose(data);
    } catch (error) {
      this.props.logout();
      console.log(error);
    }
  }
  actions = [
    <FlatButton
      label="Cancel"
      onClick={() => this.props.handleClose(null)}
      primary
    />,
    <FlatButton
      label="Login"
      onClick={this.loginUser}
      primary
    />,
  ];

  handeInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Dialog
          title="Please Login"
          actions={this.actions}
          onRequestClose={() => this.props.handleClose(null)}
          open={this.props.open}
          modal={false}
        >
          <TextField
            floatingLabelText="Username"
            name="username"
            onChange={this.handeInputChange}
            value={this.state.username}
          />
          <TextField
            floatingLabelText="Password"
            name="password"
            onChange={this.handeInputChange}
            value={this.state.password}
          />
        </Dialog>
      </div >
    );
  }
}

export default LoginModal;
