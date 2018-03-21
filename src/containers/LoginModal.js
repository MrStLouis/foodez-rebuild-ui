import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginModal from '../components/NavBar/LoginModal';
import * as dispatchAuth from '../actions/auth';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const matchDispatchToProps = (dispatch) => ({
  ...bindActionCreators(dispatchAuth, dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(LoginModal);
