import { Router } from "express";
import { UserController } from "../modules/users/UserController";

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.list);
userRoutes.delete("/:id", userController.delete);

export { userRoutes };