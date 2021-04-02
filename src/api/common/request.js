import config from '@/config';
import { instance, authIns } from '@/api/index';

export const reqPost = async (base, url, token, body, callback) => {
  instance
    .post(base + config.sitename + url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
