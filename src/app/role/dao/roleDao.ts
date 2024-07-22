import { Response } from "express";
import roleSchema from "../../schemas/roleSchema";

class RoleDao {

    protected static async get(res: Response) {
        roleSchema.find().then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to Find" });
        })
    }

}

export default RoleDao;