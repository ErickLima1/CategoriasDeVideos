import { getRepository } from "typeorm";
import { Category } from "../entities/category";
import { validateFields } from "./validationCamp";

type CategoryUpdateRequest = {
    id: string
    name: string;
    description: string;
};

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest) {
        try {
            const repo = getRepository(Category);
            const validateError = validateFields(name, description);
            const category = await repo.findOne(id);

            if (validateError) {
                return new Error(validateError);
            };

            if (!category) {
                return new Error('Categoria Não Existe!');
            };

            category.name = name ? name : category.name;
            category.description = description ? description : category.description;

            await repo.save(category);

            return category;

        } catch (error) {
            return error;

        };
    };
};