import axios from "axios";

const baseURL = "https://www.themealdb.com/api/json/v1/1";

const axiosObj = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosObj;
