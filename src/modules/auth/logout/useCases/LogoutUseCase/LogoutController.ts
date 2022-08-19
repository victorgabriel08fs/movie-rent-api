import { Request, Response } from "express";
import { LogoutUseCase } from "./LogoutUseCase";

export class LogoutController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const logoutUseCase = new LogoutUseCase();

        const result = await logoutUseCase.execute({ id });

        if (result) {
            return res.status(200).json({
                logout: true
            })
        }
    }
}