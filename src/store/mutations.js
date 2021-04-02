export default {
  setLayouts(state, layouts) {
    state.layouts = layouts;
  },
  setAuth(
    state,
    {
      token,
      expiresIn,
      expiresAt,
      refresh,
      refreshexpiresIn,
      refreshexpiresAt,
    },
  ) {
    state.token = token;
    state.expiresIn = expiresIn;
    state.expiresAt = expiresAt;
    state.refresh = refresh;
    state.refreshexpiresIn = refreshexpiresIn;
    state.refreshexpiresAt = refreshexpiresAt;
  },
  setToken(state, { token, expiresIn }) {
    state.token = token;
    state.expiresIn = expiresIn;
  },
  setUsername(state, username) {
    state.username = username;
  },
};
