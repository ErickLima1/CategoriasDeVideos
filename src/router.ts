import { Router } from "express";
import { CreateCategoryController } from "./controllers/createCategoryServices";
import { GetAllCategoryController } from "./controllers/getAllCategoryController";
import { DeleteCategoryController } from "./controllers/deleteCategoryController";
import { UpdateCategoryController } from "./controllers/updateCategoryController";
import { CreateVideoController } from "./controllers/createVideoController";
import { GetAllVideosController } from "./controllers/getAllVideoCategory";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);


//Rota do videoUser
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);



export { routes };