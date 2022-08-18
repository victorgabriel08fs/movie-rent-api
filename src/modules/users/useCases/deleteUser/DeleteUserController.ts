import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { Request, Response } from 'express';

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteUserUseCase = new DeleteUserUseCase();

        const result = await deleteUserUseCase.execute({ id });

        if (result) {
            return res.status(200).json({ deleted: true });
        }
    }
}