import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-crud-menn.herokuapp.com/api/",
});
