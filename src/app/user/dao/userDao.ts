import { Response } from "express";
import userSchema from "../../schemas/userSchema";

class UserDao {

    protected static async get(res: Response) {
        userSchema.find().then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to Find" });
        })
    }

}

export default UserDao;