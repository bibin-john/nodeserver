let express = require('express');
let router = express.Router();

const appController = require('../controllers/app.controller.js');
 
router.get('/index', appController.getRoot);
 
module.exports = router;