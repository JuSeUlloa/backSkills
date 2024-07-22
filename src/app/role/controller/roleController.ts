import { Request, Response } from "express";
import RoleDao from "../dao/roleDao";

class RoleController extends RoleDao {

    public allRoles(req: Request, res: Response): void {
        RoleController.get(res);
    }

}

const roleController = new RoleController();
export default roleController;