import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";

export class ListMoviesUseCase {
    async execute() {
        const movies = await prisma.movie.findMany();

        if (!movies) {
            throw new AppError("Does not exists movies");
        }

        return movies;
    }
}