import { Request, Response } from "express";
import RegisterDao from "../dao/registerDao";
import { nanoid } from "nanoid";
import { auditJsonAdd } from "../../../config/utilities/functions/generateAudit";

class RegisterController extends RegisterDao {

    public verify(req: Request, res: Response): void {
        const emailAccess = String(req.body.emailAccess);
        RegisterController.verifyEmail(res, emailAccess);
    }

    public registerUser(req: Request, res: Response): void {
        const paramUser = {
            nameUser: req.body.nameUser,
            lastNameUser: req.body.lastNameUser,
            privatePhotoUser: nanoid(5) + '_.jpg',
            auditLogUser: auditJsonAdd(req.body.emailAccess)
        };

        const paramAccess = {
            emailAccess: req.body.emailAccess,
            passwordAccess: req.body.passwordAccess,
            uuidAccess: nanoid(20)
        };

        RegisterController.newUser(res, paramUser, paramAccess);


    }

}

const registerController = new RegisterController();
export default registerController;