import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios';
import {getToken} from './token';
import {processErrorHandle} from './process-error-handle';
import {REQUEST_TIMEOUT} from '../consts/other-consts';

type DetailMessageType = {
  type: string;
  message: string;
  details: DetailType[];
}

type DetailType = {
  property: string;
  value: string;
  messages: string[];
}


const BACKEND_URL = 'https://13.design.pages.academy/wtw';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        const detailMessage = (error.response.data.message);
        processErrorHandle(detailMessage);
      }
      throw error;
    }
  );
  return api;
};
