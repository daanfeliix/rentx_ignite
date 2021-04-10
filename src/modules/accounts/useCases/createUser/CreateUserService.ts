import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import ICreateUSerDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";

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

        if (userAlreadyExist) throw new Error("User Already Exist");

        const passwordHash = await hash(password, 8);

        try {
            await this.usersRepository.create({
                name,
                email,
                password: passwordHash,
                driver_license,
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}
