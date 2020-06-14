import axios from 'axios';

const publicKey = '367b8e5f279b68b44e804f9f124c0db9';
const apiUrl = 'https://gateway.marvel.com';
const timeStamp = '1';
const hashMd5 = '978bb24dd031bfd0893b065329db1007';

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use((config) =>{
  config.params = config.params || {};
  config.params['ts'] = timeStamp;
  config.params['apikey'] = publicKey;
  config.params['hash'] = hashMd5;
  return config;
})

export default api;
