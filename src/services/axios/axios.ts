import AsyncStorage from '@react-native-community/async-storage';

const axios = require('axios');

//const API_URL = 'https://tg2-api.herokuapp.com/';
 const API_URL = 'http://10.0.2.2:3002/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config: {headers: {authorization: string}}) => {
    const token = await AsyncStorage.getItem('cookie');
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
