import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('/users/v1/tablenjoy/user/auth/register', userData);
}

//로그인 api
function LoginUser(userData) {
  return instance.post('', userData);
}

//baseurl
// function baseUrl() {
//   return instance.get('');
// }

export { LoginUser, registerUser };
