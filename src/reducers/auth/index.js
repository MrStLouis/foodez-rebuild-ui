const initialState = {
  status: 'AUTH_ANONYMOUS',
  username: 'temp',
  email: 'temp',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_OPEN':
      return {
        ...state,
        status: 'AUTH_AWAITING_RESPONSE',
      };
    case 'AUTH_LOGIN':
      return {
        status: 'AUTH_LOGGED_IN',
        username: action.username,
        email: action.email,
      };
    case 'AUTH_LOGOUT':
      return initialState;
    default:
      return state;
  }
};
