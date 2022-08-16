import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { ListMoviesController } from "../modules/movies/useCases/listMovies/ListMoviesController";

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const listMoviesController = new ListMoviesController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/", listMoviesController.handle);

export { movieRoutes };