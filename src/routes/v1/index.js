import express from "express";
const router = express.Router();

import { generateShortUrl, getOriginalUrl } from "../../controllers/url-controller.js";
import { validateUrl } from "../../middlewares/url-middlewares.js"; 

router.post("/short", validateUrl, generateShortUrl);
router.get("/:urlId", getOriginalUrl);

export default router;