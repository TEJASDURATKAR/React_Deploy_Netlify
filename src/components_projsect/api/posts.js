import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000',  // Correctly define the base URL
});

export default api;
