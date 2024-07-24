import { Schema, model } from "mongoose";
import Type from "../models/type";

const TypeSchema = new Schema<Type>(
    {
        nameType: { type: String, required: true },
        descriptionType: { type: String },
        stateType: { type: Number, required: true, default: 1 }
    }
)

export default model("Type", TypeSchema, "Type");