import axios from "axios";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use((config) => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
const get = (url, params = {}) => {
    console.log("get方法");
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
export { post, get };
