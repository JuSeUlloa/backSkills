import cript from "bcryptjs";
import { Response } from "express";
import accessSchema from "../../schemas/accessSchema";
import userSchema from "../../schemas/userSchema";
import inputSchema from "../../schemas/inputSchema";
import AccessResponse from "../../schemas/accessResponse";
import AccessVerifyController from "../../shared/controller/accessVerifyController";

class RegisterDao {

    protected static async verifyEmail(res: Response, email: string) {

        accessSchema.countDocuments({ emailAccess: email }).exec()
            .then((response) => {
                switch (response) {
                    case 0:
                        res.status(200).json({ respuesta: "Puede continuar, correo no existe" });
                        break;
                    default:
                        res.status(400).json({ respuesta: "Correo existe" });
                        break;
                }
            }).catch((err) => {
                res.status(400).json("Failed to find email");
            })
    }

    protected static async newUser(res: Response, objUser: any, objAccess: any): Promise<any> {
        let action = 1;
        const countEmail = await accessSchema.countDocuments({ emailAccess: objAccess.emailAccess }).exec();
        let data: any = '';
        if (countEmail == 0) {
            action = 2;
            const passCrip = cript.hashSync(objAccess.passwordAccess as string);
            const user = await userSchema.create(objUser);
            const codUser = user._id;
            objAccess.codUser = codUser; objAccess.passwordAccess = passCrip;
            await accessSchema.create(objAccess);
            data = await userSchema.findById(codUser).select({ _id: 1, nameUser: 1, lastNameUser: 1, privatePhotoUser: 1 }).populate('codRole').exec();
        }
        await accessSchema.findOne({ emailAccess: objAccess.emailAccess }).select({ emailAccess: 1, uuidAccess: 1 })
            .then(async (response: any) => {
                switch (action) {
                    case 1:
                        res.status(400).json({ messaje: "Correo ya existe" });
                        break;
                    case 2:
                        await inputSchema.create({ codAccess: response._id });
                        let accessResponse: AccessResponse = AccessVerifyController.generateToken(data, response);
                        res.status(200).json(accessResponse);
                        break;
                }
            }).catch((err) => {
                res.status(400).json({ messaje: "Failed register to user" });
            })
    }


}

export default RegisterDao;