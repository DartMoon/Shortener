import { API_KEY, API_URL } from '@/config-global';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpClient {
  constructor(private axiosInstance: AxiosInstance) {
    this.axiosInstance.interceptors.request.use((config) => {
      const token = API_KEY;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (res) => res.data,
      (error: AxiosError) => {
        throw error;
      },
    );
  }

  public POST<Response>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<Response, Response>(url, data, config);
  }
}

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const httpClient = new HttpClient(axiosInstance);
