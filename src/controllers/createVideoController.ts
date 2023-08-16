//1:15:29+
import { Request, Response } from "express";
import { CreateVideoCategoryService } from '../services/createVideoCategoryService';

export class CreateVideoController {
    async handle(req: Request, res: Response) {
        try {
            const { name, description, category_id, duration } = req.body;
            const service = new CreateVideoCategoryService();

            const result = await service.execute({ name, description, category_id, duration });

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            };

            return res.json(result);

        } catch (error) {
            return res.status(500).send("Ocorreu um Erro no Servidor");

        };
    };
};