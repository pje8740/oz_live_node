const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/data", (req, res) => {
  const body = req.body;
  res.send(`Hello, ${body.name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
