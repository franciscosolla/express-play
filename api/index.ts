import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Hello World!</h1><h2>This is my Express.js playground</h2>");
});

module.exports = app;
