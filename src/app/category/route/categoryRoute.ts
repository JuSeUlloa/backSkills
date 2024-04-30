import { Router } from "express";
import CategoryController from "../controller/categoryController";


class CategoryRoute {
    public apiRouteCategory: Router;


    constructor() {
        this.apiRouteCategory = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteCategory.get('/all', CategoryController.getCategories);
        this.apiRouteCategory.post('/add', CategoryController.insertCategory);
        this.apiRouteCategory.put('/update', CategoryController.updateCategory);
        this.apiRouteCategory.delete('/delete/:idCategory', CategoryController.deleteCategory);
    }
}

const categoryRoute = new CategoryRoute();
export default categoryRoute.apiRouteCategory;