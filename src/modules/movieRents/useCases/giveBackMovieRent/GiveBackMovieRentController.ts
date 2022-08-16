import { Request, Response } from "express";
import { GiveBackMovieUseCase } from "./GiveBackMovieRentUseCase";

export class GiveBackMovieRentController {
    async handle(req: Request, res: Response) {

        const { movieId } = req.body;

        const giveBackMovieRentUseCase = new GiveBackMovieUseCase();

        await giveBackMovieRentUseCase.execute({ movieId });

        return res.status(200).send();
    }
}