import { Router } from "express";
import { CreateMovieRentController } from "../modules/movieRents/useCases/createMovieRent/CreateMovieRentController";
import { GiveBackMovieRentController } from "../modules/movieRents/useCases/giveBackMovieRent/GiveBackMovieRentController";

const movieRentsRoutes = Router();

const createMovieRentController = new CreateMovieRentController();
const giveBackMovieRentController = new GiveBackMovieRentController();

movieRentsRoutes.post("/", createMovieRentController.handle);
movieRentsRoutes.patch("/giveBack", giveBackMovieRentController.handle);

export { movieRentsRoutes };