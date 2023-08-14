import { Request, Response } from "express";
import { CreateCategoryService } from "../services/createCategoryServices";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        try {
            //55:30
            const { name, description } = request.body;

            const service = new CreateCategoryService();
            const result = await service.execute({ name, description });

            if (result instanceof Error) {
                return response.status(400).send(result.message);
            }

            return response.status(200).json({ message: 'Categoria Criada Com Sucesso', category: result });

        } catch (error) {
            return response.status(500).send("Ocorreu um Erro no Servidor");
        };

    };
};