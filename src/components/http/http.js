import axios from "axios";

const http = (method, url) =>
  axios({
    method,
    url,
    responseType: "json",
  });

export default http;
