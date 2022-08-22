"use strict";
exports.__esModule = true;
exports.movieRoutes = void 0;
var express_1 = require("express");
var MovieController_1 = require("../modules/movies/MovieController");
var movieController = new MovieController_1.MovieController();
var movieRoutes = (0, express_1.Router)();
exports.movieRoutes = movieRoutes;
movieRoutes.post("/", movieController.create);
movieRoutes.get("/", movieController.list);
movieRoutes.get("/:title", movieController.findByTitle);
movieRoutes["delete"]("/:id", movieController["delete"]);
//# sourceMappingURL=movie.routes.js.map