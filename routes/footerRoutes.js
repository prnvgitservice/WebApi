import express from "express";
import { getFooterMenu, getFooterSubmenu } from "../controllers/footerController.js";

const router = express.Router();

router.get("/menu", getFooterMenu);
router.get("/submenu", getFooterSubmenu);

export default router;
