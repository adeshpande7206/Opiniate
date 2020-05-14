// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://floating-gorge-78756.herokuapp.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
