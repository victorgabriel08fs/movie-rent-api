import { Request, Response } from "express";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

export class DeleteMovieController {
    async handle(req: Request, res: Response) {
        const deleteMovieUseCase = new DeleteMovieUseCase();

        const { id } = req.params;

        const result = await deleteMovieUseCase.execute({ id });

        if (result) {
            return res.status(200).json({ deleted: true });
        }
    }
}