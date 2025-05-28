import express from "express";
import { getAllPrnvServiceAreas } from "../controllers/PrnvServiceAreasController.js";
import { getAllAreasPincodes } from "../controllers/ViewGetallareasPincodesController.js";

const router = express.Router();

router.get("/regions", getAllPrnvServiceAreas);
router.get("/regions/pincodes" , getAllAreasPincodes);

export default router;