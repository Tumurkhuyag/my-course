import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://sandwich-e3805-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
