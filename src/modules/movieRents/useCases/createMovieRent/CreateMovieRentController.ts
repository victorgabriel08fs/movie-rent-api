import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
    async handle(req: Request, res: Response) {
        const { userId, movieId } = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase();

        await createMovieRentUseCase.execute({ userId, movieId });

        return res.status(200).send();
    }
}