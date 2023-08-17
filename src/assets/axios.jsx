import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.37.164.96/",

  params: {
    // api_key: import.meta.env.
    language: "ko-KR",
  },
});

export default instance;
