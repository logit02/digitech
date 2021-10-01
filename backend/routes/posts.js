const router = require('express').Router();
const Post = require('../models/Post');
const cors = require('cors');
router.use(cors());

module.exports = router