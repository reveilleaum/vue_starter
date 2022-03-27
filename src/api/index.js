import { apiUrl } from "@/main";
import axios from "axios";

export const getData = async () => {
  try {
    const data = await axios.get(`${apiUrl}/bpi/currentprice.json`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
