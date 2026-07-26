import axios from "axios";

let isRefreshing = false;
let failedQueue = [];

const EXCLUDED_ENDPOINTS = ["/login", "/logout", "/register", "/refresh"];

const refreshApi = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_BASE_URL
      : "http://localhost:5000/api/v1/",
  timeout: 10000,
  withCredentials: true,
});

const processQueue = (error = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });

  failedQueue = [];
};

const setupResponseInterceptor = (api) => {
  api.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      if (axios.isCancel(error) || error.code === "ERR_CANCELED") {
        return new Promise(() => {});
      }

      if (!originalRequest) {
        return Promise.reject(error);
      }

      if (!error.response) {
        return Promise.reject(new Error("Network error."));
      }

      if (
        EXCLUDED_ENDPOINTS.some((endpoint) =>
          originalRequest.url?.includes(endpoint),
        )
      ) {
        return Promise.reject(error);
      }

      const { status, data } = error.response;

      if (status !== 401) {
        return Promise.reject(error);
      }

      if (
        data?.code !== "ACCESS_TOKEN_EXPIRED" &&
        data?.code !== "ACCESS_TOKEN_MISSING"
      ) {
        return Promise.reject(error);
      }

      if (originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      isRefreshing = true;

      try {
        await refreshApi.post("auth/refresh");

        processQueue();

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);

        const code = refreshError.response?.data?.code;

        refreshError.silent = code === "REFRESH_TOKEN_NOT_FOUND";

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    },
  );
};

export default setupResponseInterceptor;
