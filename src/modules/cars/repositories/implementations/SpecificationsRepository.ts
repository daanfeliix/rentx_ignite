import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = await this.repository.create({
            description,
            name,
        });

        this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();

        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });

        return specification;
    }
}

export { SpecificationRepository };
