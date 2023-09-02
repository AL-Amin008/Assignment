// app.js

const express = require("express");
const app = express();
const apiRouter = require("./src/Routes/api");

// Middleware and configuration can be added here in the future

// Use the API router
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
