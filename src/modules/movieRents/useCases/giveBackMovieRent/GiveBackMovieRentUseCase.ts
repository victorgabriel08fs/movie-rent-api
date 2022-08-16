import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { GiveBackMovieRentDTO } from "../../dtos/GiveBackMovieRentDTO";

export class GiveBackMovieUseCase {
    async execute({ movieId }: GiveBackMovieRentDTO): Promise<void> {
        const movieAlreadyExist = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movieAlreadyExist) {
            throw new AppError("Movie does not exists!");
        }

        const rent = await prisma.movieRent.findFirst({
            where: {
                movieId
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        if (!rent) {
            throw new AppError("This movie was not rented!");
        }

        if (rent.status) {
            throw new AppError("This movie was already returned!");
        }

        await prisma.movieRent.update({
            where: {
                id: rent.id
            },
            data: {
                status: true
            }
        })
    }
}