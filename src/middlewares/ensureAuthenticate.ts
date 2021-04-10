import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

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

    if (!authHeader) throw new Error("Token missing");

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(
            token,
            "fd93621fbc824b5edeed386bebb341a2"
        ) as IPayload;
        console.log(decoded);

        next();
    } catch (err) {
        throw Error("Invalid token");
    }
}
