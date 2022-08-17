"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/users/useCases/createUser/CreateUserController");
var ListUsersController_1 = require("../modules/users/useCases/listUsers/ListUsersController");
var createUserController = new CreateUserController_1.CreateUserController();
var listUsersController = new ListUsersController_1.ListUsersController();
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUsersController.handle);
//# sourceMappingURL=user.routes.js.map