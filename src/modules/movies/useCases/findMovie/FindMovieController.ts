import { Request, Response } from "express";
import { FindMovieUseCase } from "./FindMovieUseCase";

export class FindMovieController {
    async handle(req: Request, res: Response) {
        const findMovieUseCase = new FindMovieUseCase();

        const { title } = req.params;

        const result = await findMovieUseCase.execute({ title });

        return res.status(200).json(result);
    }
}