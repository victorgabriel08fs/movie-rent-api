import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { Movie } from "@prisma/client";
export class ListMoviesUseCase {
    async execute(): Promise<Movie[]> {
        const movies = await prisma.movie.findMany();

        if (!movies) {
            throw new AppError("Does not exists movies");
        }

        return movies;
    }
}