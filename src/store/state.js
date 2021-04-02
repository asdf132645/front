export default {
  layouts: '',
  token: sessionStorage.getItem('token') || '',
  username: sessionStorage.getItem('username') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  expiresIn: 0,
  expiresAt: 0,
  refreshexpiresIn: 0,
  refreshexpiresAt: 0,
  refresh: null,
};
