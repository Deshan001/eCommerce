import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSingIn } from "../middlewares/authmiddlewares.js";

// router object
const router = express.Router();

//routing

//REGISTER
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSingIn, testController);

export default router;
