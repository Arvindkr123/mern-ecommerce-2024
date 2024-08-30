import { Router } from "express";
import {
  loginUserController,
  userRegisterController,
  logoutUserController,
} from "../controllers/auth.controllers.js";
import { authMiddleWare } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", userRegisterController);
router.post("/login", loginUserController);
router.post("logout", logoutUserController);
router.get("/check-auth", authMiddleWare, async (req, res) => {
  try {
    const user = req.user;
    res
      .status(200)
      .json({ success: true, message: "Authenticated user!", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went worng!" });
  }
});

export default router;
