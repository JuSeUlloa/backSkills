import { Schema, model, Types } from "mongoose";
import { Input } from "../models/input";

const InputSchema = new Schema<Input>({
    dateInput: { type: Date, default: Date.now },
    codAccess: { type: Types.ObjectId, ref: "Access", required: true }
})
