import { Request, Response } from "express";
import { MovieUseCase } from "./MovieUseCase";

export class MovieController {
    async create(req: Request, res: Response): Promise<any> {
        const { title, synopsis, duration, release_date, price, director } = req.body;

        const movieUseCase = new MovieUseCase();

        const result = await movieUseCase.create({ title, synopsis, duration, release_date, price, director });

        return res.status(201).json(result);
    }

    async delete(req: Request, res: Response) {
        const movieUseCase = new MovieUseCase();

        const { id } = req.params;

        const result = await movieUseCase.delete({ id });

        if (result) {
            return res.status(200).json({ deleted: true });
        }
    }

    async findByTitle(req: Request, res: Response) {
        const movieUseCase = new MovieUseCase();

        const { title } = req.params;

        const result = await movieUseCase.findByTitle({ title });

        return res.status(200).json(result);
    }

    async list(req: Request, res: Response): Promise<any> {
        const movieUseCase = new MovieUseCase();

        const result = await movieUseCase.list();

        return res.status(200).json(result);
    }
}