import { Response } from "express";
import accessSchema from "../../schemas/accessSchema";


class TokenDao {

    protected static async queryUUID(res: Response, codUser: string) {
        accessSchema.findOne({ codUser: codUser }, { uuidAccess: 1 })
            .then((response) => {
                res.status(200).json(response?.uuidAccess);
            }).catch((err) => {
                res.status(400).json({ messaje: "Error to verify UUID" });
            })
    }
}

export default TokenDao;