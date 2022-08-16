import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { MovieRent } from '@prisma/client';
import { CreateMovieRentDTO } from '../../dtos/CreateMovieRentDTO';

export class CreateMovieRentUseCase {
    async execute({ userId, movieId }: CreateMovieRentDTO): Promise<void> {
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
}