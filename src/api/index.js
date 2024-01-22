import axios from 'axios';
import useStore from 'store';

const baseURL = process.env.REACT_APP_API;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(function (config) {
  // console.log(useStore.getState().auth);
  let auth = useStore.getState().auth;
  let token = auth?.loginInfo?.AccessToken || auth?.appInfo?.AccessToken;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default axiosInstance;
