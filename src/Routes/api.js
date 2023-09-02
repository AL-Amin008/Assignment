// api.js

const express = require("express");
const router = express.Router();

const {
  create,
  read,
  delete: remove, // 'delete' is a reserved keyword, so use 'remove' as the function name
  update,
} = require("../Controllers/blogController"); // Import the appropriate controller

// Create a new blog
router.get("/blog/create", create);

// Read a blog
router.get("/blog/read", read);

// Delete a blog
router.get("/blog/delete", remove);

// Update a blog
router.get("/blog/update", update);

// Repeat the above structure for other controller routes

module.exports = router;
