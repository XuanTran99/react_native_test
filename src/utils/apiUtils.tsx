import axios from 'axios';
import queryString from 'query-string';
import {API_URL} from '../constant/apiUrl';
import store from '../redux/store';

export const getFormData = (formObject: any) => {
  let formBody = new FormData();
  for (let property in formObject) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = formObject[property];
    if (encodedKey === 'files') {
      encodedValue.map((obj: any) => {
        formBody.append('files', obj);
      });
    } else {
      formBody.append(encodedKey, encodedValue);
    }
  }
  return formBody;
};

const client = axios.create({
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'multipart/form-data',
  },

  paramsSerializer: params => queryString.stringify(params),
});

client.interceptors.request.use(async (config: any) => {
  const token = await store.getState().user.access_token;
  config.baseURL = API_URL;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    if (config.method === 'get' || config.method === 'path') {
      const param = config.params;
      if (param) {
        config.params = param;
      }
    } else {
      const data = config.data;
      if (data) {
        config.data = data;
      }
    }
  }
  console.log('config: ', config);

  return config;
});

client.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  error => {
    throw error;
  },
);
export default client;
