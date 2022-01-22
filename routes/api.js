const express = require('express');
const router = express.Router();
// const { uploadSingle, uploadMultiple } = require('../middleware/multer');
const apiController = require('../controller/apiController');

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);

module.exports = router;
