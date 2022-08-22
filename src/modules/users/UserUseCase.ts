import { User } from "@prisma/client";
import { AppError } from "../../erros/AppError";
import { prisma } from "../../prisma/client";
import { CreateUserDTO } from "./dtos/CreateUserDTO";
import { DeleteUserDTO } from "./dtos/DeleteUserDTO";
import { FindUserDTO } from "./dtos/FindUserDTO";

export class UserUseCase {
    async create({ name, email, password }: CreateUserDTO): Promise<User> {
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
                name, email, password
            }
        });

        return user;
    }

    async delete({ id }: DeleteUserDTO): Promise<boolean> {
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

    async list(): Promise<User[]> {
        const users = await prisma.user.findMany();

        if (!users) {
            throw new AppError("Does not exists users!");
        }

        return users;
    }

    async find({ id }: FindUserDTO): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new AppError("User does not exists");
        }

        return user;
    }

}