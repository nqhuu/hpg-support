import express from "express";
import UserController from "../controller/UserController.js";
const router = express.Router()

router.get('/', UserController.getHomePageUser)

export default router;