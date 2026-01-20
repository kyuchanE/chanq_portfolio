import axios, { type AxiosInstance } from "axios";

export const createAxiosClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    timeout: 5000,
  });
};
