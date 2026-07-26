import axios from "axios";

import setupRequestInterceptor from "./interceptors/requestInterceptor";
import setupResponseInterceptor from "./interceptors/responseInterceptor";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_BASE_URL
      : "http://localhost:5000/api/v1/",

  timeout: 10000,

  withCredentials: true,
});

setupRequestInterceptor(api);
setupResponseInterceptor(api);

export default api;
