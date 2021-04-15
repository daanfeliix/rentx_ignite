import AppError from "@errors/AppError";

import CategoriesRepositoryInMemory from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
// Agrupar os testes
describe("Create category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryService = new CreateCategoryService(
            categoriesRepositoryInMemory
        );
    });
    it("should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category description Test",
        };
        await createCategoryService.execute({
            name: category.name,
            description: category.description,
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with name exists", async () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category description Test",
            };
            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });

            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
