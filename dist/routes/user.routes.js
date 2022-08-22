"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var UserController_1 = require("../modules/users/UserController");
var userController = new UserController_1.UserController();
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/", userController.create);
userRoutes.get("/", userController.list);
userRoutes.get("/:id", userController.find);
userRoutes["delete"]("/:id", userController["delete"]);
//# sourceMappingURL=user.routes.js.map