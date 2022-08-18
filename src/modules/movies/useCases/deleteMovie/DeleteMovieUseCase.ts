import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteMovieDTO } from "../../dtos/DeleteMovieDTO";

export class DeleteMovieUseCase {
    async execute({ id }: DeleteMovieDTO): Promise<boolean> {
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
}