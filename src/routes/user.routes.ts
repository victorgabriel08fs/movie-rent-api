import { Router } from "express";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUsersController.handle);
userRoutes.delete("/", deleteUserController.handle);

export { userRoutes };