import { prisma } from "../../../../prisma/client";
import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { AppError } from "../../../../erros/AppError";

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        //verifica existência do usuário

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        //cria usuário
        const user = await prisma.user.create({
            data: {
                name, email
            }
        });

        return user;
    }
}