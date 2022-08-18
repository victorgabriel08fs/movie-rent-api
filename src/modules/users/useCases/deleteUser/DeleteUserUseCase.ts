import { AppError } from "../../../../erros/AppError";
import { DeleteUserDTO } from "modules/users/dtos/DeleteUserDTO";
import { prisma } from "../../../../prisma/client";

export class DeleteUserUseCase {
    async execute({ id }: DeleteUserDTO): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new AppError("User does not exists!");
        }

        await prisma.user.delete({
            where: {
                id
            }
        });

        return true;
    }
}