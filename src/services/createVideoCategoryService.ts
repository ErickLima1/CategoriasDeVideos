import { getCustomRepository } from "typeorm";
import { CategoryRepository, VideoRepository } from "../repositories/categoryRepository";
import { validateFieldsVideo } from './validationCamp';


type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;

};

export class CreateVideoCategoryService {
    async execute({ name, description, duration, category_id }: VideoRequest): Promise<Error | VideoRequest> {
        //Ideal era ter isso repositorio em uma camada isolada - CRIADO[X].
        try {
            const videoRepo = getCustomRepository(VideoRepository);
            const repoCategory = getCustomRepository(CategoryRepository);
            const validationErrorVideo = validateFieldsVideo(name, description, duration);

            if(validationErrorVideo) {
                return new Error(validationErrorVideo);
            };

            if (!(await repoCategory.findOne(category_id))) {
                return new Error('Categoria Não Existe');
            };

            const video = videoRepo.create({ name, description, duration, category_id });

            await videoRepo.save(video);
            return video;

        } catch (error) {
            return error;
        };
    };
};