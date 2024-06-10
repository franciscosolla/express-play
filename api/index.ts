import express from "express";
import path from "path";

const app = express();

app.get("/vue*", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "src/vue/index.html"));
});

app.get("/*", (_, res) => {
  res.send(
    "<h1>This is my Express.js playground<h1><a href='/vue'>Go to Vue.js</a>",
  );
});

module.exports = app;
