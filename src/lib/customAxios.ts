import axios from "axios";
import constant from "../constant/constant.json";

const customAxios = axios.create({
  baseURL: constant.SERVER,
});

customAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;