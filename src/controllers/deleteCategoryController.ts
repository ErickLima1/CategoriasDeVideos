import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/deleteCategoryServices";

export class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const service = new DeleteCategoryService();
            const result = await service.execute(id);

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            };

            return res.status(200).json({ message: 'Categoria Excluida com Sucesso!' });
        } catch (error) {

            return res.status(500).json({ error: 'Internal Server Error' });

        };

    };
};