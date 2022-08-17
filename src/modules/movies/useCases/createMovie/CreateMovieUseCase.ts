import { prisma } from "../../../../prisma/client";
import { Movie } from '@prisma/client';
import { CreateMovieDTO } from "../../../movies/dtos/CreateMovieDTO";
import { AppError } from "../../../../erros/AppError";

export class CreateMovieUseCase {
    async execute({ title, synopsis, duration, price, director, release_date }: CreateMovieDTO): Promise<Movie> {
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title
            }
        });
        if (movieAlreadyExists) {
            throw new AppError("Movie already exists!");
        }

        const movie = prisma.movie.create({
            data: {
                title, synopsis, duration, price, director, release_date
            }
        });

        return movie;
    }
}