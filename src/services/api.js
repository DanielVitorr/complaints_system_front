import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true
});

// Interceptor para adicionar o token no header de todas as requisições
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token"); // usamos sessionStorage, que some ao fechar o navegador
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
