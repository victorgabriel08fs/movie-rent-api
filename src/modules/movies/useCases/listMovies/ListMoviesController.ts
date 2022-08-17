import { Request, Response } from "express";
import {Movie} from '@prisma/client';
import { ListMoviesUseCase } from "./ListMoviesUseCase";

export class ListMoviesController{
    async handle(req:Request,res:Response):Promise<any>{
        const listMoviesUseCase = new ListMoviesUseCase();

        const result = await listMoviesUseCase.execute();

        return res.status(200).json(result);
    }
}