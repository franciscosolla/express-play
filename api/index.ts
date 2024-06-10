import express from "express";
import path from "path";

const app = express();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "src/index.html"));
});

module.exports = app;
