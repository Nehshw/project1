const express = require('express');
const router = express.Router();


const authorController = require('../controllers/authorController.js');
const blogController = require('../controllers/blogController.js');
const getController = require('../controllers/getController.js');

router.post('/authors', authorController.createAuthor);
router.post('/createBlog', blogController.createBlog);
router.get('/blogs',getController.getBlog);

module.exports = router;