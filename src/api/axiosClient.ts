import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:6969/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
