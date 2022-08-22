import { Router } from "express";
import { AuthController } from "modules/auth/AuthController";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/login", authController.login);
authRoutes.post("/logout", authController.logout);

export { authRoutes };