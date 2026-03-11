import express from "express";
import { checkInsect, getHistory } from "../controllers/insectController.js";
import { protect } from "../middleware/authMiddleware.js";
import { addInsect } from "../controllers/insectController.js";
import { adminOnly } from "../middleware/roleMiddleware.js";



const router = express.Router();

router.post("/check", checkInsect);
router.get("/history",protect, getHistory);

//  Admin-only route
router.post("/add", protect, adminOnly, addInsect);

export default router;