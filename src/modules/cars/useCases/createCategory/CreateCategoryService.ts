import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar retorno de erro
 * [x] - Acessar repositorio
 */

@injectable()
export class CreateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadsExists = await this.categoryRepository.findByName(
            name
        );

        if (categoryAlreadsExists) {
            throw new Error("Category already exists!");
        }

        await this.categoryRepository.create({ name, description });
    }
}
