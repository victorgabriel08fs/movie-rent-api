import { prisma } from "../../../../../prisma/client";
import { AppError } from "../../../../../erros/AppError";
import { LogoutDTO } from "../../dtos/LogoutDTO";
import moment from "moment";


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

        await prisma.session.update({
            data: {
                status: false
            },
            where: {
                id: lastSession.id
            }
        });


        return true;
    }
}