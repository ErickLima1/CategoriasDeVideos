import { Request, Response } from "express";
import { GetAllVideosService } from "../services/getAllVideoCategoryService";


export class GetAllVideosController {
    async handle(req: Request, res: Response) {
        try {   
            const service = new GetAllVideosService();
            const videos = await service.execute();

            return res.json(videos);

        } catch (error) {
            return res.status(500).send("Ocorreu um Erro no Servidor");
            
        };
    };
};