import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import IUsersRepository from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
export default class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        // Verificar se o usuário existe
        const user = await this.usersRepository.findByEmail(email);

        if (!user) throw new Error("Email or password incorrect!");

        // Se a senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new Error("Email or password incorrect!");

        // Gerar Json web token
        const token = sign({}, "fd93621fbc824b5edeed386bebb341a2", {
            subject: user.id,
            expiresIn: "1d",
        });

        const { name } = user;
        const response: IResponse = { user: { name, email }, token };

        return response;
    }
}
