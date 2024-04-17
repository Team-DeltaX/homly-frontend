import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// config axios client header
AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.setItem("isLogged", false);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location.href = "/";
    } else {
      return Promise.reject(error);
    }
  }
);

export default AxiosClient;
