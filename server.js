const express = require("express");
const path = require("path");

const server = express();
const PORT = 3000;

const colors = ["black", "blue", "red"];

server.get("/api/colors", (req, res) => {
  const colors = ["black", "blue", "red"];
  res.json(colors);
});

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

server.listen(PORT);
