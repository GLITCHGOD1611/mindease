const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Make sure this path is correct

router.get('/', userController.getalluser); // Must match exported function name
router.post('/put', userController.adduser);   // POST route to add a user

module.exports = router;
