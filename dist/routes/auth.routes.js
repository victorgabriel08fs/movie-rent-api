"use strict";
exports.__esModule = true;
exports.authRoutes = void 0;
var express_1 = require("express");
var LogoutController_1 = require("../modules/auth/logout/useCases/LogoutUseCase/LogoutController");
var LoginController_1 = require("../modules/auth/login/useCases/LoginUseCase/LoginController");
var authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
var loginController = new LoginController_1.LoginController();
var logoutController = new LogoutController_1.LogoutController();
authRoutes.post("/login", loginController.handle);
authRoutes.post("/logout", logoutController.handle);
//# sourceMappingURL=auth.routes.js.map