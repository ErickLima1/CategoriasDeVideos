import { Request, Response } from "express";
import { GetAllCategoriesService } from '../services/getAllCategoryServices';


export class GetAllCategoryController {
    async handle(request: Request, response: Response) {
        try {
            const service = new GetAllCategoriesService();
            const categories = await service.execute();

            return response.json(categories);

        } catch (error) {
            return response.status(500).json({ error: 'Internal Server Error' });

        };
    };
};
