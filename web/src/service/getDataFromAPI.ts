const API =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_
    : process.env.NEXT_PUBLIC_PROD;

console.log(API);

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
