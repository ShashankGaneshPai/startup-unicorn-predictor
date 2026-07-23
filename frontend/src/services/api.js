import axios from "axios";

const api = axios.create({
  baseURL: "https://startup-unicorn-predictor.onrender.com",
});

export default api;
