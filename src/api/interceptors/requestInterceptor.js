const setupRequestInterceptor = (api) => {
  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );
};

export default setupRequestInterceptor;
