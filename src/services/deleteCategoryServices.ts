import { getRepository } from "typeorm";
import { Category } from "../entities/category";
// 
export class DeleteCategoryService {
    async execute(id: string) {
        try {
            const repo = getRepository(Category);

            if(!(await repo.findOne(id))) {
                return new Error("Categoria Não Existe!");
            };

            await repo.delete(id);
            
        } catch(error) {
            return error;
        };
    };
};