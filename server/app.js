const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.send("Server is running!");
});

app.listen(5000);
