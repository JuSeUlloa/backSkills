import { model, Schema, Types } from 'mongoose';
import { Access } from '../models/access';

const AccessSchema = new Schema<Access>({
    emailAccess: { type: String, required: true, unique: true },
    passwordAccess: { type: String, required: true },
    codUser: { type: Types.ObjectId, ref: "User", required: true }
})

export default model("Access",AccessSchema, "Access");