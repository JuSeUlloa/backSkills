import { Schema, Types, model } from 'mongoose';
import User from '../models/user';

const UserSchema = new Schema<User>({
    nameUser: { type: String, required: true },
    lastNameUser: { type: String, required: true },
    telephoneUser: { type: String, required: true },
    publicPhotoUser: { type: String, required: true },
    privatePhotoUser: { type: String, required: true },
    stateUser: { type: Number, required: true },
    auditLogUser: { type: Object, required: true },
    codRole: { type: Types.ObjectId, ref: "Role", required: true }
})

export default model("User", UserSchema, "User");