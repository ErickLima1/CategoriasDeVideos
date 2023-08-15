import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/category";
import { Video } from "../entities/video";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    // Adicionar métodos específicos de acesso ao banco de dados para categorias

    async findByName(name: string): Promise<Category | undefined> {
        return this.findOne({ where: { name } });
    }
}

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {
    // Adicionar métodos específicos de acesso ao banco de dados para vídeos

    async findByCategory(categoryId: string): Promise<Video[]> {
        return this.find({ where: { category: categoryId } });
    }
}
