import { getRepository } from "typeorm";
import { Video } from "../entities/video";


export class GetAllVideosService {
    async execute() {
        try {
            const repo = getRepository(Video);
            const videos = await repo.find({
                relations: ["category"],
            });

            return videos;
        } catch (error) {
            return error;
        };
    };
};