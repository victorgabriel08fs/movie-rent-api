"use strict";
exports.__esModule = true;
exports.movieRoutes = void 0;
var express_1 = require("express");
var CreateMovieController_1 = require("../modules/movies/useCases/createMovie/CreateMovieController");
var ListMoviesController_1 = require("../modules/movies/useCases/listMovies/ListMoviesController");
var movieRoutes = (0, express_1.Router)();
exports.movieRoutes = movieRoutes;
var createMovieController = new CreateMovieController_1.CreateMovieController();
var listMoviesController = new ListMoviesController_1.ListMoviesController();
movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", listMoviesController.handle);
//# sourceMappingURL=movie.routes.js.map