import { AppError } from "../../../../../erros/AppError";
import { prisma } from "../../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";
import { Session } from "@prisma/client";

export class LoginUseCase {
    async execute({ email, password }: LoginDTO): Promise<Session> {

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new AppError("User does not exists");
        }

        const lastSession = await prisma.session.findFirst({
            where: {
                userId: user.id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        if (lastSession) {

            if (!lastSession.status) {
                throw new AppError("Session expired");
            }

            const now = new Date();
            const difference = (lastSession.created_at.getTime() - now.getTime()) / 60000;

            if (difference > 40) {
                await prisma.session.update({
                    data: {
                        status: false
                    },
                    where: {
                        id: lastSession.id
                    }
                });

                throw new AppError("Session expired");
            }

        }

        if (user.password != password) {
            throw new AppError("User or password invalids");
        }

        const session = await prisma.session.create({
            data: {
                userId: user.id
            }
        });

        return session;
    }
}