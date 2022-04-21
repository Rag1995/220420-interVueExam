import axios from "axios";

const http = axios.create({
  baseURL: `https://mocki.io/v1`,
  header: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  (err) => Promise.reject(err)
);

http.interceptors.response.use(
  (res) => res,
  (err) => {
    const { data, status } = err.response;
    console.log(data, status);
    // if (status == 401) {
    //   alert("請回到登入");
    // } else {
    //   alert(data);
    // }
    return Promise.reject(err);
  }
);

export default http;
