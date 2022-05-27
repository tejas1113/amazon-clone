import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amzclone-tejas/us-central1/api", //The API URL
});

export default instance;
