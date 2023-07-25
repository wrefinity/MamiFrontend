import { BASE_URL } from "@/lib/constants";
import axios, { AxiosRequestConfig } from "axios";


// to prevent overwriting the global axios config

const axiosConfig : AxiosRequestConfig = {
  headers:  {},
  baseURL: BASE_URL
};
const myAxios = axios.create(axiosConfig);


myAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    // if (err.response.status === 404) {
    //   throw new Error(`${err.config.url} not found`);
    // }
    console.log("Error in request", err ? err.message : err);
    // if (err && err.response && err.response.status === 401) {
    //   console.log(err, "Error occured")
    // }
    throw err;
  }
);

export default myAxios;