import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { movieRoutes } from "./movie.routes";
import { movieRentsRoutes } from "./movie_rent.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);
routes.use("/movieRents", movieRentsRoutes);
routes.use("/auth", authRoutes);

export { routes };