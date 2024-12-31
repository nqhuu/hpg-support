import express from "express";
import SiteController from "../controller/SiteController.js";
const router = express.Router()

router.get('/', SiteController.getHomePage)

export default router;