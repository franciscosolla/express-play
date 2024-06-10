import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("<h1>Hello World!</h1><h2>This is my Express.js playground</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
