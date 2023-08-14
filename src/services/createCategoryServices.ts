import { getCustomRepository, getRepository } from "typeorm";
import { Category } from "../entities/category";
import { validateFields } from "./validationCamp";
import { CategoryRepository } from "../repositories/categoryRepository";

type CategoryRequest = {
    name: string;
    description: string;
};

export class CreateCategoryService {
    async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
        //Ideal era ter isso repositorio em uma camada isolada - CRIADO[X].
        const repoCategory = getCustomRepository(CategoryRepository);
        const validationError = validateFields(name, description);

        if (validationError) {
            return new Error(validationError);
        }

        try {
            const existingCategory = await repoCategory.findOne({ name });
            if (existingCategory) {
                throw new Error("Categoria já existe");
            }

            const category = repoCategory.create({
                name,
                description,
            });

            await repoCategory.save(category);

            return category;
        } catch (error) {
            return error;
        }
    }
}
