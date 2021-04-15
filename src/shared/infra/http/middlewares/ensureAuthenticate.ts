import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import AppError from "@errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
    sub: string;
}

// Bearer sadaçskdjçasjdçaklhf
export default async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError("Token missing", 401);

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userId } = verify(
            token,
            "fd93621fbc824b5edeed386bebb341a2"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(userId);

        if (!user) throw new AppError("User does not Exist", 401);
        request.user = { id: userId };

        next();
    } catch (Error) {
        throw new AppError("Invalid token", 401);
    }
}
