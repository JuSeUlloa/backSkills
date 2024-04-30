import { model, Schema } from "mongoose";
import Category from "../models/category";

const CategorySchema = new Schema<Category>(
    {
        nameCategory: { type: String, required: true, unique: true },
    },
);

export default model("Category", CategorySchema, "Category");
