import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_API;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
