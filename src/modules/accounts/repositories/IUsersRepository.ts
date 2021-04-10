import ICreateUSerDTO from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create(data: ICreateUSerDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export default IUsersRepository;
