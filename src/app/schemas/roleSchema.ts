import { model, Schema } from 'mongoose';
import Role from '../models/role';

const RoleSchema = new Schema<Role>(
    {
        nameRole: { type: String, required: true, unique: true },
        stateRole: { type: Number, required: true },
        auditLogRole: { type: Object, required: true }
    }
)

export default model("Role", RoleSchema, "Role");