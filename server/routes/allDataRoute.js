import express from "express";
import getAllData from "../controllers/controllerAll.js";
const router = express.Router();

router.get("/:month",getAllData);

export default router;