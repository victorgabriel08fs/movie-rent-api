import { Request, Response } from "express";
import { AuthUseCase } from "./AuthUseCase";

export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;


        const authUseCase = new AuthUseCase();

        const result = await authUseCase.login({ email, password });

        if (result) {
            return res.status(200).json({
                token: result.id
            })
        }
    }

    async logout(req: Request, res: Response) {
        const { id } = req.body;

        const authUseCase = new AuthUseCase();

        const result = await authUseCase.logout({ id });

        if (result) {
            return res.status(200).json({
                logout: true
            })
        }
    }
}