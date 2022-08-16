import { Router } from "express";
import { movieRoutes } from "./movie.routes";
import { movieRentsRoutes } from "./movie_rent.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);
routes.use("/movieRents", movieRentsRoutes);

export { routes };