import { Router } from "express";
import { DeleteMovieController } from "../modules/movies/useCases/deleteMovie/DeleteMovieController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { ListMoviesController } from "../modules/movies/useCases/listMovies/ListMoviesController";

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const listMoviesController = new ListMoviesController();
const deleteMovieController = new DeleteMovieController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", listMoviesController.handle);
movieRoutes.delete("/", deleteMovieController.handle);

export { movieRoutes };