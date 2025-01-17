const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./Portfolio/config/database");

dotenv.config({ path: "config.env" });

connectDB();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
