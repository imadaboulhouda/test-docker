const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json({
    res: "hello",
  });
});
app.listen(3000, function () {});
