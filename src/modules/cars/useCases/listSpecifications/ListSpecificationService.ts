import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationService {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationsRepository
    ) {}

    async execute(): Promise<Specification[]> {
        const allSpecifications = await this.specificationsRepository.list();
        return allSpecifications;
    }
}

export { ListSpecificationService };
