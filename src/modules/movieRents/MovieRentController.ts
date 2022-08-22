import { Request, Response } from "express";
import { MovieRentUseCase } from "./MovieRentUseCase";

export class MovieRentController {
    async giveBack(req: Request, res: Response) {

        const { movieId } = req.body;

        const movieRentUseCase = new MovieRentUseCase();

        await movieRentUseCase.giveBack({ movieId });

        return res.status(200).send();
    }

    async create(req: Request, res: Response) {
        const { userId, movieId } = req.body;

        const movieRentUseCase = new MovieRentUseCase();

        await movieRentUseCase.create({ userId, movieId });

        return res.status(200).send();
    }
}