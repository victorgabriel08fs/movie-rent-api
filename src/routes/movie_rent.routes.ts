import { Router } from "express";
import { CreateMovieRentController } from "../modules/movieRents/useCases/createMovieRent/CreateMovieRentController";

const movieRentsRoutes = Router();

const createMovieRentController = new CreateMovieRentController();

movieRentsRoutes.post("/", createMovieRentController.handle);

export { movieRentsRoutes };