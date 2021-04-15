import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import AppError from "@errors/AppError";
import ICreateUSerDTO from "@modules/accounts/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";

@injectable()
export class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUSerDTO): Promise<void> {
        const userAlreadyExist = await this.usersRepository.findByEmail(email);

        if (userAlreadyExist) throw new AppError("User Already Exist");

        const passwordHash = await hash(password, 8);

        try {
            await this.usersRepository.create({
                name,
                email,
                password: passwordHash,
                driver_license,
            });
        } catch (Error) {
            throw new AppError("User already exists");
        }
    }
}
