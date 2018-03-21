import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../App';
import * as dispatchAuth from '../actions/auth';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const matchDispatchToProps = (dispatch) => ({
  ...bindActionCreators(dispatchAuth, dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
