require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Homepage",
  });
});

app.get("/api/instagram", (req, res) => {
  res.status(200).json({
    success: true,
    followers: 4000,
    following: 20,
  });
});

app.get("/api/facebook", (req, res) => {
  res.status(200).json({
    success: true,
    followers: 2000,
    following: 40,
  });
});

app.get("/api/twitter", (req, res) => {
  res.status(200).json({
    success: true,
    followers: 8000,
    following: 100,
  });
});

app.get("/api/:id", (req, res) => {
  res.status(200).send(req.params.id);
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
