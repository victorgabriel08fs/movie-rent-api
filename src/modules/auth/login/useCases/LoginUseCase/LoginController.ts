import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const loginUseCase = new LoginUseCase();

        const result = await loginUseCase.execute({ email, password });

        if (result) {
            return res.status(200).json({
                token: result.id
            })
        }
    }
}