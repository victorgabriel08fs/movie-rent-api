import { Movie } from "@prisma/client";
import { AppError } from "../../erros/AppError";
import { prisma } from "../../prisma/client";
import { CreateMovieDTO } from "./dtos/CreateMovieDTO";
import { DeleteMovieDTO } from "./dtos/DeleteMovieDTO";
import { FindMovieDTO } from "./dtos/FindMovieDTO";

export class MovieUseCase{
    async create({ title, synopsis, duration, price, director, release_date }: CreateMovieDTO): Promise<Movie> {
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

    async delete({ id }: DeleteMovieDTO): Promise<boolean> {
        const movie = await prisma.movie.findUnique({
            where: {
                id
            }
        });

        if (!movie) {
            throw new AppError("Movie does not exists");
        }

        await prisma.movie.delete({
            where: {
                id
            }
        });

        return true;
    }

    async findByTitle({ title }: FindMovieDTO): Promise<Movie> {
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

    async list(): Promise<Movie[]> {
        const movies = await prisma.movie.findMany();

        if (!movies) {
            throw new AppError("Does not exists movies");
        }

        return movies;
    }
}