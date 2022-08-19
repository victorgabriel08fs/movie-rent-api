import { AppError } from "../../../../../erros/AppError";
import { prisma } from "../../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";
import { Session } from "@prisma/client";
import moment from "moment";

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

            const sessionDate = new Date(lastSession.created_at);

            const difference = moment(now).diff(moment(sessionDate));

            const minutes = moment.duration(difference).asMinutes();
            if (minutes > 40) {
                await prisma.session.update({
                    data: {
                        status: false
                    },
                    where: {
                        id: lastSession.id
                    }
                });

                throw new AppError("Session expired");
            }else{
                return lastSession;
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