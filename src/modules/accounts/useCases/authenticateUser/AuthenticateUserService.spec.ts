import AppError from "@errors/AppError";
import UsersRepositoryInMemory from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import ICreateUSerDTO from "../../dtos/ICreateUserDTO";
import { CreateUserService } from "../createUser/CreateUserService";
import AuthenticateUserService from "./AuthenticateUserService";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserService = new AuthenticateUserService(
            usersRepositoryInMemory
        );
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it("Should be able to authenticate an user", async () => {
        const user: ICreateUSerDTO = {
            driver_license: "0001234",
            email: "user@teste.com",
            password: "1234",
            name: "User Test",
        };

        await createUserService.execute(user);

        const result = await authenticateUserService.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate an none existent user", () => {
        expect(async () => {
            await authenticateUserService.execute({
                email: "false@email.com",
                password: "12345",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authenticate if wrong password", () => {
        expect(async () => {
            const user: ICreateUSerDTO = {
                driver_license: "0001234",
                email: "user@teste.com",
                password: "1234",
                name: "User Test Error",
            };

            await createUserService.execute(user);

            await authenticateUserService.execute({
                email: user.email,
                password: "12345",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
