import axios, { InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Modify config to set CORS-related options
    config.headers!["Access-Control-Allow-Origin"] = "*";
    config.headers!["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
    // Add other CORS headers as needed

    return config;
  },
  (error: Error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
