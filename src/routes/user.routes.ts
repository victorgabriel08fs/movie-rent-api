import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUsersController.handle);

export { userRoutes };