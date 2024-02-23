const express = require("express");
const router = express.Router();

const UrlController = require("../../controllers/url-controller");
const UrlMiddleware = require("../../middlewares/url-middlewares");

router.post("/short", UrlMiddleware.validateUrl, UrlController.generateShortUrl);

module.exports = router;