import { instance } from './index';

//로그인 api
function LoginUser(userData) {
  return instance.post('', userData);
}

export { LoginUser };
