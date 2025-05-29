import express from "express";
import { addToCart, getCartDetails } from "../controllers/prnvCartController.js"

const router = express.Router();

router.post("/checkout", addToCart);
router.get("/details", getCartDetails);

export default router;