import store from '@/store/index';
import axios from 'axios';
import { validateTimeRf, validateTimeAt, getAtRtToken } from '@/api/auth';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    config => {
      const originalRequest = config;
      //액세스토큰이 만료됬고, 리프레쉬 토큰이 유효하다면,
      if (validateTimeRf() && !validateTimeAt()) {
        return getAtRtToken() // rt를 리퀘스트 헤더에 넣고 at를 재발급
          .then(res => {
            // 결과 정상상태
            if (res.status === 200) {
              // console.log(config);
              sessionStorage.setItem(
                'token',
                ' Bearer ' + res.data.data.access.token,
              );
              sessionStorage.setItem(
                'expiresIn',
                res.data.data.access.expiresIn,
              );

              axios.defaults.headers.common[
                'accessToken'
              ] = sessionStorage.getItem('token');

              const userData = {
                token: res.data.data.access.token,
                expiresIn: res.data.data.access.expiresIn,
              };
              store.dispatch('DORESETTOKEN', userData);
              //실패했던 요청을 다시 수행
              return originalRequest;
            }
          });
      } // 리프레쉬 토큰 이 만료 시
      else if (!validateTimeRf()) {
        sessionStorage.clear();
        localStorage.clear();
        store.getters.isLogin = false;
        alert('세션 만료 다시 로그인 해주세요.');
        this.$router.replace('/auth/login');
      }
      config.headers.Authorization = store.state.token;
      console.log(config);
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return instance;
}
