export const openAuth = () => ({
  type: 'AUTH_OPEN',
});

export const login = ({ username, email = 'temp' }) => ({
  type: 'AUTH_LOGIN',
  username,
  email,
});

export const logout = () => ({
  type: 'AUTH_LOGOUT',
});
