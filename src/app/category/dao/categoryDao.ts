import { Response } from "express";
import Category from "../../models/category";
import CategorySchema from "../../schemas/categorySchema";


class CategoryDao {

    protected static async addCategory(res: Response, objCategory: Category): Promise<any> {
        CategorySchema.create(objCategory)
            .then((response) => {
                res.status(200).json({ message: "Inset Category", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register Category" });
            })
    }

    protected static async getAll(res: Response): Promise<any> {
        CategorySchema.find().sort({ nameCategory: 1 }).then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load data" })
        })
    }

    protected static async update(res: Response, objCategory: Category): Promise<any> {
        CategorySchema.updateOne({ _id: objCategory._id }, objCategory)
            .then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update" })
            })
    }

    protected static async delete(res: Response, idCategory: string): Promise<any> {
        CategorySchema.deleteOne({ _id: idCategory })
            .then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to delete" })
            })
    }


}

export default CategoryDao;

