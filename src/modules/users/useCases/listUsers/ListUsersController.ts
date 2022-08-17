import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    async handle(req:Request,res: Response):Promise<any> {
        const listUsersUseCase = new ListUsersUseCase();

        const result = await listUsersUseCase.execute();

        return res.status(200).json(result);
    }
}