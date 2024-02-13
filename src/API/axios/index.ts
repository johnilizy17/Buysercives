import axios from "axios";

 const defaultOptions = {
  baseURL: "http://localhost:4000/",
  headers: {
    'Content-Type': 'application/json',
  },
};

// http://localhost:4000/
export let instance = axios.create(defaultOptions);