import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}
