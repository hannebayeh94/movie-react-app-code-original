export const get = (path) => {
  const API = process.env.REACT_APP_API;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  return fetch(API + path, {
    headers: {
      Authorization: "Bearer " + API_TOKEN,
      "Content-Type": "application/json:charset=utf-8",
    },
  }).then((response) => response.json());
};
