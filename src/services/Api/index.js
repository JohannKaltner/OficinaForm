import axios from "axios";

const api = axios.create({
  baseURL: "http://172.19.48.1:2018/",
});
export default api;
