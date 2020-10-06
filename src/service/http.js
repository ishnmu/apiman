import axios from "axios";

const http = (method, url) =>
  axios({
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  });

export default http;
