const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello form the backend", this: "this from the data" });
});

app.listen(3000, () => {
  console.log("App is litning on 3000 port");
});
