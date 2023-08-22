import { Request, Response, response } from "express";
import { CreateCategoryService } from "../services/createCategoryServices";
import { UpdateCategoryService } from "../services/updateCategoryServices";

export class UpdateCategoryController {
    async handle(req: Request, res: Response) {

        try {

            const { id } = req.params;
            const { name, description } = req.body;

            const service = new UpdateCategoryService();
            const result = await service.execute({ id, name, description });

            if (result instanceof Error) {
                return res.status(400).json(result.message);

            };

            return res.status(200).json({ message: 'Categoria Atualizada Com Sucesso', category: result });

        } catch (error) {
            return response.status(500).send("Ocorreu um Erro no Servidor");
        }
    };
};