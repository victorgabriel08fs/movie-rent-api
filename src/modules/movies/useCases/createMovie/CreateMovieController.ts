import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController{
    async handle(req:Request,res:Response):Promise<any>{
        const {title,synopsis,duration,release_date,price,director} = req.body;

        const createMovieUseCase = new CreateMovieUseCase();

        const result = await createMovieUseCase.execute({title,synopsis,duration,release_date,price,director});

        return res.status(201).json(result);
    }
}