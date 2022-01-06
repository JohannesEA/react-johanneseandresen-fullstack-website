import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://react-node-johannesea-homepage.herokuapp.com/",
  // baseURL: "http://localhost:2800/",
});
