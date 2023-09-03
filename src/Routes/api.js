
const express = require("express");
const router = express.Router();

const {
  create,
  read,
  delete: remove, // 'delete' is a reserved keyword, so use 'remove' as the function name
  update,
} = require("../Controllers/blogController"); // Import the appropriate controller
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");
const profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController");
const serviceController = require("../Controllers/serviceController");
const titleController = require("../Controllers/titleController");


// Create a new blog
router.get("/blog/create", create);
router.get("/blog/read", read);
router.get("/blog/delete", remove);
router.get("/blog/update", update);

// BlogDetails Controller Routes
router.get("/blogdetails/create",create);
router.get("/blogdetails/read", read);
router.get("/blogdetails/delete",remove);
router.get("/blogdetails/update",update);

// Comment Controller Routes
router.get("/comment/create", create);
router.get("/comment/read", read);
router.get("/comment/delete",remove);
router.get("/commnet/update", update);

//Message Controller Routes
router.get("/message/create", create);
router.get("/message/read",read);
router.get("/message/delete",remove);
router.get("/message/update",update);

//Portfolio Controller Routes
router.get("/portfolio/create",create);
router.get("/portfolio/read",read);
router.get("/portfolio/delete",remove);
router.get("/portfolio/update", update);

//Product Controller Routes
router.get("/product/create",create);
router.get("/product/read",read);
router.get("/product/delete",remove);
router.get("/product/update",update);

//Profit Controller Routes
router.get("/prfit/create",create);
router.get("/profit/read",read);
router.get("/profit/delete",remove);
router.get("/profit/update",update);

//Project Controller Routes
router.get("/project/create",create);
router.get("/project/read",read);
router.get("/project/delete",remove);
router.get("/project/update",update);

//Service Controller Routes
router.get("/service/create",create);
router.get("/service/read",read);
router.get("/service/delete",remove);
router.get("/service/update",update);

//Title Controller Routes
router.get("/title/create",create);
router.get("/title/read",read);
router.get("/title/delete",remove);
router.get("/title/update",update);


module.exports = router;
