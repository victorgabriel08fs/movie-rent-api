"use strict";
exports.__esModule = true;
exports.movieRentsRoutes = void 0;
var express_1 = require("express");
var MovieRentController_1 = require("../modules/movieRents/MovieRentController");
var movieRentController = new MovieRentController_1.MovieRentController();
var movieRentsRoutes = (0, express_1.Router)();
exports.movieRentsRoutes = movieRentsRoutes;
movieRentsRoutes.post("/", movieRentController.create);
movieRentsRoutes.patch("/giveBack", movieRentController.giveBack);
//# sourceMappingURL=movie_rent.routes.js.map