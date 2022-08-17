"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var movie_routes_1 = require("./movie.routes");
var movie_rent_routes_1 = require("./movie_rent.routes");
var user_routes_1 = require("./user.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/users", user_routes_1.userRoutes);
routes.use("/movies", movie_routes_1.movieRoutes);
routes.use("/movieRents", movie_rent_routes_1.movieRentsRoutes);
//# sourceMappingURL=index.js.map