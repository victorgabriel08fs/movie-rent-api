import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { MovieRent } from '@prisma/client';
import { CreateMovieRentDTO } from '../../dtos/CreateMovieRentDTO';

export class CreateMovieRentUseCase {
    async execute({ userId, movieId }: CreateMovieRentDTO): Promise<MovieRent> {
        const movieAlreadyExist = prisma.movie.findUnique({
            where: {
                id: movieId
            }
        })
        const userAlreadyExist = prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!movieAlreadyExist && !userAlreadyExist) {
            throw new AppError("Fail, user or movie does not exists!");
        }
        if (!movieAlreadyExist && !userAlreadyExist) {
            throw new AppError("Movie already exists rented by user!");
        }

        const rent = prisma.movieRent.create({
            data: {
                userId, movieId
            }
        });

        return rent;
    }
}