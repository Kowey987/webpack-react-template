import * as process from "process";
import axios from "axios";

export const serverInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});