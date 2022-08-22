import { AppError } from "../../erros/AppError";
import { prisma } from "../../prisma/client";
import { CreateMovieRentDTO } from "./dtos/CreateMovieRentDTO";
import { GiveBackMovieRentDTO } from "./dtos/GiveBackMovieRentDTO";

export class MovieRentUseCase {
    async create({ userId, movieId }: CreateMovieRentDTO): Promise<void> {
        const movieAlreadyExist = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })
        const userAlreadyExist = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        const movieRentAlreadyExist = await prisma.movieRent.findFirst({
            where: {
                movieId
            }
        })


        if (!movieAlreadyExist) {
            throw new AppError("Movie does not exists!");
        }

        if (!userAlreadyExist) {
            throw new AppError("User does not exists!");
        }

        if (movieRentAlreadyExist) {
            throw new AppError("Movie it's already rented!");
        }

        await prisma.movieRent.create({
            data: {
                userId, movieId
            }
        });

    }

    async giveBack({ movieId }: GiveBackMovieRentDTO): Promise<void> {
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
