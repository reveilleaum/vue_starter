import { apiUrl } from "@/main";
import axios from "axios";

export const getData = () => {
  axios
    .get(`${apiUrl}/bpi/currentprice.json`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
