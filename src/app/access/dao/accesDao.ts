
import { Response } from "express";
import { Access } from "../../models/access";
import nanoId from 'nanoid';
import cript from "bcryptjs";
import accessSchema from "../../schemas/accessSchema";
import userSchema from "../../schemas/userSchema";
import AccessResponse from "../../schemas/accessResponse";
import AccessVerifyController from "../../shared/controller/accessVerifyController";
import inputSchema from "../../schemas/inputSchema";


class AccessDao {

    private static async validateUser(objAccess: Access): Promise<any> {
        let exist: any = await accessSchema.find({ emailAccess: objAccess.emailAccess });
        let action = 0;
        let sesionData: any;
        if (exist.length > 0) {
            const objTmp = exist[0];
            if (cript.compareSync(objAccess.passwordAccess, objTmp.passwordAccess)) {
                action = 1;
                await accessSchema.updateOne({ codUser: objTmp.codUser }, { $set: { uuidAccess: nanoId.nanoid(20) } });
                await inputSchema.create({ codAccess: objTmp._id });
                exist = await userSchema.findById(objTmp.codUser).select({ _id: 1, nameUser: 1, lastNameUser: 1, privatePhotoUser: 1 }).populate('codRole').exec();
                sesionData = exist;
            }
        } else {
            exist = await accessSchema.find({ emailAccess: objAccess.emailAccess });
            if (exist.length > 0) {
                action = 2;
            }
        }
        return { action, sesionData }
    }

    protected static async signinUser(res: Response, objAccess: Access): Promise<any> {
        await this.validateUser(objAccess).then(async (response) => {
            switch (response.action) {
                case 1:
                    let objTmp: any = await accessSchema.findOne({ emailAccess: objAccess.emailAccess }).select({ emailAccess: 1, uuidAccess: 1 });
                    let accessResponse: AccessResponse = AccessVerifyController.generateToken(response.sesionData, objTmp);
                    res.status(200).json(accessResponse);
                    break;
                case 2:
                    res.status(403).json({ messaje: "Invalid Password" });
                    break;
                default:
                    res.status(401).json({ messaje: "Invalid User" });
                    break;
            }
        }).catch((err) => {
            console.log(err);

            res.status(400).json({ messaje: "Error to access" });
        })

    }

}

export default AccessDao;