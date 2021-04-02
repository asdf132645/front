import config from '@/config';
import { instance, authIns } from '@/api/index';
//로그인값이 필요없는 경우
export const reqPost = async (base, url, token, body, callback) => {
  instance
    .post(base + config.sitename + url, body, {
      headers: {
        Authorization: ' Bearer ' + token,
      },
    })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(err) {
      console.log('err');
      if (err.response) {
        callback(err.response.data);
      } else {
        callback(null);
      }
    });
};
//로그인 값이 필요한경우
export const authReqPost = async (base, url, token, body, callback) => {
  authIns
    .post(base + config.sitename + url, body, {
      headers: {
        Authorization: ' Bearer ' + token,
      },
    })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(err) {
      console.log(err);
      if (err.response) {
        callback(err.response.data);
      } else {
        callback(null);
      }
    });
};
//로그인값이 필요없을 경우
export const reqGet = async (base, url, token, callback) => {
  instance
    .get(base + config.sitename + url, {
      headers: {
        Authorization: ' Bearer ' + token,
      },
    })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(null);
      }
    });
};
//로그인값이 필요한경우
export const authReqGet = async (base, url, token, callback) => {
  authIns
    .get(base + config.sitename + url, {
      headers: {
        Authorization: ' Bearer ' + token,
      },
    })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(null);
      }
    });
};
