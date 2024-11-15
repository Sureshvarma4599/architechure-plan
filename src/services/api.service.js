import axios from "axios";
import Cookies from "js-cookie";
const baseUrl = "http://localhost:1221"; // process.env
const path = () => {
  return {
    signUp: "/api/v1/signup",
    login: "/api/v1/login",
    users: "/api/v1/users",
  };
};

const api = axios.create({
  baseURL: baseUrl, // Replace with your API endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const userLogin = async (body) => {
  return await axios.post(baseUrl + path().login, body).then((res) => {
    return res.data;
  });
};

export const createUser = async (body) => {
  return await axios
    .post(baseUrl + path().signUp, body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
