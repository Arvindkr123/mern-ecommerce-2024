import { Router } from "express";
import {
  loginUserController,
  userRegisterController,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", userRegisterController);
router.post("/login", loginUserController);

export default router;
