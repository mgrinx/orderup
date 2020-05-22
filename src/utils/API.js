import axios from "axios";

export default axios.create({
  // baseURL: "https://randomuser.me/api/",
  baseURL: "https://secret-dusk-15424.herokuapp.com",
  responseType: "json"
});