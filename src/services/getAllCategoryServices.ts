import { getRepository } from "typeorm";
import { Category } from "../entities/category";


export class GetAllCategoriesService {
    async execute() {
        try {
            const repo = getRepository(Category);
            const categories = await repo.find();

            return categories;
        } catch(error) {
            return error;
        };
    };
};