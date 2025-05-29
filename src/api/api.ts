import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api", // базовый URL для запросов
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавим интерцептор для добавления токена авторизации в каждый запрос, если он есть
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
