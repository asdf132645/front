import { instance } from '@/api/index';
import jwt_decode from 'jwt-decode';

// 회원가입 API
function registerUser(userData) {
  return instance.post('/users/v1/tablenjoy/user/auth/register', userData);
}

//로그인 api
const loginUser = async userData => {
  return await instance.post('/users/v1/tablenjoy/user/auth/login', userData);
};

//토큰 만료일 계산
const validateTimeAt = () => {
  //세션스토리지에서 액세스토큰을 가져온다.
  const accessToken = sessionStorage.getItem('token');
  //jwt를 디코드해서 플레이로드를 추출한다.
  var decodePayload = jwt_decode(accessToken, { payload: true });
  // exp가 unix time 으로 나오기 떄문에 변환을 해준다.
  var exp = new Date(decodePayload.exp * 1000).getTime();
  var now = new Date().getTime();
  //변환된 값 비교
  if (now < exp) {
    console.log('at is valid accessToken');
    return true;
  } else {
    console.log('at is invalid');
    return false;
  }
};

//리프레쉬 토큰 만료일 계산
const validateTimeRf = () => {
  //세션스토리지에서 액세스토큰을 가져온다.
  const refreshToken = localStorage.getItem('refreshToken');
  //jwt를 디코드해서 플레이로드를 추출한다.
  var decodePayload = jwt_decode(refreshToken, { payload: true });
  // exp가 unix time 으로 나오기 떄문에 변환을 해준다.
  var exp = new Date(decodePayload.exp * 1000).getTime();
  var now = new Date().getTime();
  //변환된 값 비교
  if (now < exp) {
    console.log(now + '<br>' + exp);
    return true;
  } else {
    console.log('at is invalid');
    return false;
  }
};

const getAtRtToken = () =>
  instance.post(
    '/users/v1/tablenjoy/user/auth/refresh',
    { refreshToken: localStorage.getItem('refreshToken') },
    {
      headers: { Authorization: localStorage.getItem('refreshToken') },
    },
  );

export {
  loginUser,
  registerUser,
  validateTimeAt,
  validateTimeRf,
  getAtRtToken,
};
