import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://192.168.221.70:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// config axios client header
AxiosClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
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
      sessionStorage.clear();
      if(error.response.data.role === "admin"){
        window.location.href = "/admin/login";
      }else{
        window.location.href = "/";
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default AxiosClient;
