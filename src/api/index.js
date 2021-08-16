import Cookies from 'js-cookie';
import axios from 'axios';

const HEADERS_OPTIONS = {
    'Content-Type': 'application/json',
    'X-Client-Id': 'prospeku.web',
    'X-Client-Version': '1.0.0',
    'X-Device-Id': 'prospeku.web',
};

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: HEADERS_OPTIONS,
});
  
export const apiAnon = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: HEADERS_OPTIONS,
});

api.interceptors.request.use(
    config => {
      let newConfig = config;
      newConfig.headers['X-Auth-Token'] = Cookies.get('prospeku.authToken');
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
);

apiAnon.interceptors.request.use(
    config => {
      let newConfig = config;
      newConfig.headers['X-Auth-Token'] = '';
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
);