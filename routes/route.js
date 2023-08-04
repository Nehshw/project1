const express = require('express');
const router = express.Router();
const getBlog = require("../controllers/getController");

const authorController = require('../controllers/authorController.js');
const blogController = require('../controllers/blogController.js');

router.post('/authors', authorController.createAuthor);
router.post('/createBlog', blogController.createBlog);
router.get('/Blog', getBlog.getAuthor);

module.exports = router;