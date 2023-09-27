import { DataType } from "@/types/data.types";

export const getData = () => {
  return fetch(`${process.env.API_ADDRESS}/transactions/data`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
