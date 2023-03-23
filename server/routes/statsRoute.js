import express from "express";
import {getPie,getStat,getBar } from "../controllers/controllerIndivi.js";
const router = express.Router();


router.get("/monthlyStats/:yearMonth",getStat);
router.get("/statsBar/:Month",getBar);
router.get("/statsPie/:Month",getPie);







export default router;