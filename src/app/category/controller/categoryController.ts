import { Request, Response } from "express";
import CategoryDao from "../dao/categoryDao";
import Category from "../../models/category";


class CategoryController extends CategoryDao {

    public insertCategory(req: Request, res: Response): void {
        const objCategory: Category = req.body;
        CategoryController.addCategory(res, objCategory);
    }

    public getCategories(req: Request, res: Response): void {
        CategoryController.getAll(res);
    }

    public updateCategory(req: Request, res: Response): void {
        const objCategory: Category = req.body;
        CategoryController.update(res, objCategory);
    }

    public deleteCategory(req: Request, res: Response): void {
        if (req.params.idCategory) {
            const id = String(req.params.idCategory);
            CategoryController.delete(res, id);
        } else {
          res.status(400).json({message:"category code no valid"});
        }
    }

}

const categoryController = new CategoryController();
export default categoryController;