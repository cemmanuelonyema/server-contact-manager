import "dotenv/config";
import express from "express";
import env from "./utilities/validateEnv";
import connectDB from "./database";
const app = express();
const port = env.PORT || 5000;

app.get("/", (reg, res) => {
  res.send("HELLO CONTACT MANAGER FROM THE BACKEND");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// connectDB();
connectDB();
