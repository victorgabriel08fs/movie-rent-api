"use strict";
exports.__esModule = true;
exports.movieRentsRoutes = void 0;
var express_1 = require("express");
var CreateMovieRentController_1 = require("../modules/movieRents/useCases/createMovieRent/CreateMovieRentController");
var GiveBackMovieRentController_1 = require("../modules/movieRents/useCases/giveBackMovieRent/GiveBackMovieRentController");
var movieRentsRoutes = (0, express_1.Router)();
exports.movieRentsRoutes = movieRentsRoutes;
var createMovieRentController = new CreateMovieRentController_1.CreateMovieRentController();
var giveBackMovieRentController = new GiveBackMovieRentController_1.GiveBackMovieRentController();
movieRentsRoutes.post("/", createMovieRentController.handle);
movieRentsRoutes.patch("/giveBack", giveBackMovieRentController.handle);
//# sourceMappingURL=movie_rent.routes.js.map