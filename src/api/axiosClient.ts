import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://server-minimalistic-ecommerce.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
