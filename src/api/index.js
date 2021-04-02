import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

// 액시오스 초기화 함수
//인증이 필요한 함수
function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const authIns = createInstanceWithAuth();
