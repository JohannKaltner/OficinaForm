import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.84:2018/",
});
export default api;
