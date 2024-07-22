import { Request, Response } from "express";
import userDao from "../dao/userDao";

class UserController extends userDao {

    public allusers(req: Request, res: Response): void {
        UserController.get(res);
    }

}

const userController = new UserController();
export default userController;