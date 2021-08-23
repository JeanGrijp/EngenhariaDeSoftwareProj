import axios from "axios";

const api = axios.create({
  baseURL: "https://bd-es-2021-default-rtdb.firebaseio.com/",
});

export default api;