import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Profile from './containers/Profile';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#d32f2f',
    primary2Color: '#b71c1c',
    accent1Color: '#ffd600',
    pickerHeaderColor: '#f44336',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  isLoading: true,
    };
  }
  componentDidMount() {
    this.props.openAuth();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentUser.loading !== nextProps.currentUser.loading) {
      if (!nextProps.currentUser.loading) {
        if (nextProps.currentUser.me) {
          this.props.login(nextProps.currentUser.me);
        } else {
          this.props.logout();
        }
      }
    }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div className="App">
            <NavBar className="header" auth={this.props.auth} />
            <Sidebar />
            <div className="main">
              <Route exact path="/" component={Profile} />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const currentUser = gql`
  {
    me {
      username
      email
    }
  }
`;

export default graphql(currentUser, {
  name: 'currentUser',
})(App);
