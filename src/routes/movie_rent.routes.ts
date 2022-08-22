import { Router } from "express";
import { MovieRentController } from "../modules/movieRents/MovieRentController";

const movieRentController = new MovieRentController();

const movieRentsRoutes = Router();


movieRentsRoutes.post("/", movieRentController.create);
movieRentsRoutes.patch("/giveBack", movieRentController.giveBack);

export { movieRentsRoutes };