const user = require("./controllers/user");
const users = require("./controllers/data");

const express = require("express");

const BACKEND_PORT = 3000;
const app = express();

app.listen(BACKEND_PORT, () =>
  console.log(`app listening on port ${BACKEND_PORT};`)
);

app.get("/api/user", (req, res) => {
  res.send(user);
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/user-settings", (req, res) => {
  res.send("");
});

app.get("/api/items-list", (req, res) => {
  res.send("");
});

app.get("/api/item", (req, res) => {
  res.send("");
});

app.on("error", console.error);
