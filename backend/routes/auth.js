const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(cors());
