import express from "express";
import { getPost,getStat} from "../controllers/controllerIndivi.js";
const router = express.Router();

router.get("/",getPost);


export default router;