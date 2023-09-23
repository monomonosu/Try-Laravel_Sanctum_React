import Axios, { AxiosError } from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// レスポンスインターセプターを追加
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
