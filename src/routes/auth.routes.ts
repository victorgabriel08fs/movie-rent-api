import { Router } from "express";
import { LogoutController } from "../modules/auth/logout/useCases/LogoutUseCase/LogoutController";
import { LoginController } from "../modules/auth/login/useCases/LoginUseCase/LoginController";

const authRoutes = Router();

const loginController = new LoginController();
const logoutController = new LogoutController();

authRoutes.post("/login", loginController.handle);
authRoutes.post("/logout", logoutController.handle);

export { authRoutes };