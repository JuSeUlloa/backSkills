import { Request, Response } from "express";
import AccessDao from "../dao/accesDao";
import { Access } from "../../models/access";


class AccessController extends AccessDao {

    public signin(req: Request, res: Response): void {
        const objAcces: Access = req.body;
        AccessController.signinUser(res, objAcces);
    }

}

const accessController = new AccessController();
export default accessController;