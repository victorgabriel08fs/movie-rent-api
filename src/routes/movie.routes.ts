import { Router } from "express";
import { MovieController } from "../modules/movies/MovieController";

const movieController = new MovieController();

const movieRoutes = Router();

movieRoutes.post("/", movieController.create);
movieRoutes.get("/", movieController.list);
movieRoutes.get("/:title", movieController.findByTitle);
movieRoutes.delete("/:id", movieController.delete);

export { movieRoutes };