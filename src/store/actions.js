import { loginUser } from '@/api/auth';

export default {
  async LOGIN({ commit }, userData) {
    let { data } = await loginUser(userData);
    let val = data.data;
    let authData = {
      token: val.access.token,
      expiresIn: val.access.expiresIn,
      expiresAt: val.access.expiresIn,
      refresh: val.refresh.token,
      refreshexpiresIn: val.refresh.expiresIn,
      refreshexpiresAt: val.refresh.expiresIn,
    };
    console.log(authData);
    commit('setAuth', authData);
    commit('setUsername', userData.username);
    sessionStorage.setItem('token', ' Bearer ' + val.access.token);
    localStorage.setItem('refreshToken', val.refresh.token);
    sessionStorage.setItem('username', userData.username);
    sessionStorage.setItem('refreshexpiresAt', val.refresh.expiresIn);
    return data;
  },
  async DORESETTOKEN({ commit }, userData) {
    commit('setToken', { ...userData });
  },
};
