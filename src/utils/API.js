import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3001,
  baseURL: "https://secret-dusk-15424.herokuapp.com",
  responseType: "json"
});