var express = require('express');
var router = express.Router();
// const { uploadSingle, uploadMultiple } = require('../middleware/multer');
const apiController = require('../controller/apiController');

router.get('/landing-page', apiController.landingPage);

module.exports = router;
