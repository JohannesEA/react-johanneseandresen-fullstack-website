import axios from "axios";

const BASE_URL = "https://react-node-johannesea-homepage.herokuapp.com/";
// const BASE_URL = "http://localhost:2800/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `bearer ${TOKEN}` },
});
