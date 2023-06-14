const express = require("express");
const app = express();
const data = require("./data");
const PORT = 8000;

app.get("/api/products", (req, res) => {
  return res.json(data);
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});
