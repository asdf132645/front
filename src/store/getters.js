export default {
  reExpiresAt: state => {
    return state.refreshexpiresAt;
  },
  authToken: state => {
    return state.token;
  },
  expiresIn: state => {
    return state.expiresIn;
  },
  expiresAt: state => {
    return state.expiresAt;
  },
  reToken: state => {
    return state.refresh;
  },
  reExpiresIn: state => {
    return state.refreshexpiresIn;
  },
  isLogin(state) {
    return state.username !== '';
  },
};
