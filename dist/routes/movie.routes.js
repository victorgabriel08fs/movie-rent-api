"use strict";
exports.__esModule = true;
exports.movieRoutes = void 0;
var express_1 = require("express");
var DeleteMovieController_1 = require("../modules/movies/useCases/deleteMovie/DeleteMovieController");
var CreateMovieController_1 = require("../modules/movies/useCases/createMovie/CreateMovieController");
var ListMoviesController_1 = require("../modules/movies/useCases/listMovies/ListMoviesController");
var FindMovieController_1 = require("../modules/movies/useCases/findMovie/FindMovieController");
var movieRoutes = (0, express_1.Router)();
exports.movieRoutes = movieRoutes;
var createMovieController = new CreateMovieController_1.CreateMovieController();
var listMoviesController = new ListMoviesController_1.ListMoviesController();
var deleteMovieController = new DeleteMovieController_1.DeleteMovieController();
var findMovieController = new FindMovieController_1.FindMovieController();
movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", listMoviesController.handle);
movieRoutes.get("/:title", findMovieController.handle);
movieRoutes["delete"]("/:id", deleteMovieController.handle);
//# sourceMappingURL=movie.routes.js.map