import { Schema, Types, model } from 'mongoose';
import User from '../models/user';

const UserSchema = new Schema<User>({
    nameUser: { type: String, required: true },
    lastNameUser: { type: String, required: true },
    telephoneUser: { type: String, required: true, default: "Pendiente" },
    publicPhotoUser: { type: String, required: true, default: "noDisponible.jpg" },
    privatePhotoUser: { type: String, required: true },
    stateUser: { type: Number, required: true, default: 1 },
    auditLogUser: { type: Object, required: true },
    codRole: { type: Types.ObjectId, ref: "Role", required: true, default: new Types.ObjectId("6698403b5ea2671d5acea723") }
})

export default model("User", UserSchema, "User");