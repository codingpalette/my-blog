import axios from 'axios';

const firebaseAPI = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

firebaseAPI.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.authorization = Math.random();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const testApi = {
  testGet: () => firebaseAPI.get('test/'),
};
