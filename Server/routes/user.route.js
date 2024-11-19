import { Router } from "express";
import {
  loginUser,
  registerUser,
  getUsers,
} from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/token.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/allUsers").get(authenticateToken, getUsers);

export default router;
