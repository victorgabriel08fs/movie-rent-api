import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { User } from '@prisma/client';

export class ListUsersUseCase {
    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany();

        if (!users) {
            throw new AppError("Does not exists users!");
        }

        return users;
    }
}