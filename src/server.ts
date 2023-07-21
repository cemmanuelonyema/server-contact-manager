import express from "express";

const app = express();
const port = 5000;

app.get("/", (reg, res) => {
  res.send("HELLO CONTACT MANAGER FROM THE BACKEND");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
