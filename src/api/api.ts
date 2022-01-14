import axios from "axios";

const requestHeaders = {
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL: "http://localhost:9000",
  headers: requestHeaders,
  withCredentials: true,
});

export const updateHeaderConfig = (token: string) => {
  //@ts-ignore
  Api.defaults.headers.Authorization = `Bearer ${token}`;
};

export default Api;
