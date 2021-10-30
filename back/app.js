const express = require("express");

const BACKEND_PORT = 3000;
const app = express();

app.listen(BACKEND_PORT, () =>
  console.log(`app listening on port ${BACKEND_PORT};`)
);

app.get("/user", (req, res) => {
  res.send("");
});

app.get("/user-settings", (req, res) => {
  res.send("");
});

app.get("/items-list", (req, res) => {
  res.send("");
});

app.get("/item", (req, res) => {
  res.send("");
});
