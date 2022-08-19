import { prisma } from "../../../../../prisma/client";
import { AppError } from "../../../../../erros/AppError";
import { LogoutDTO } from "../../dtos/LogoutDTO";

export class LogoutUseCase {
    async execute({ id }: LogoutDTO): Promise<boolean> {
        const lastSession = await prisma.session.findFirst({
            where: {
                userId: id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        if (!lastSession || !lastSession.status) {
            throw new AppError("Error");
        }

        const now = new Date();
        const difference = (lastSession.getTime() - now.getTime()) / 60000;

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

        return true;
    }
}