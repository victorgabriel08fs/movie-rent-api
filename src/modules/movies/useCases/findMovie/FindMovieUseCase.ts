import { Movie } from "@prisma/client";
import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { FindMovieDTO } from "../../dtos/FindMovieDTO";

export class FindMovieUseCase {
    async execute({ title }: FindMovieDTO): Promise<Movie> {
        const movie = await prisma.movie.findFirst({
            where: {
                title
            }
        });

        if (!movie) {
            throw new AppError("Movie not founded!");
        }

        return movie;

    }
}