import { Router } from "express";
import { DeleteMovieController } from "../modules/movies/useCases/deleteMovie/DeleteMovieController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { ListMoviesController } from "../modules/movies/useCases/listMovies/ListMoviesController";
import { FindMovieController } from "../modules/movies/useCases/findMovie/FindMovieController";

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const listMoviesController = new ListMoviesController();
const deleteMovieController = new DeleteMovieController();
const findMovieController = new FindMovieController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", listMoviesController.handle);
movieRoutes.get("/:title", findMovieController.handle);
movieRoutes.delete("/:id", deleteMovieController.handle);

export { movieRoutes };