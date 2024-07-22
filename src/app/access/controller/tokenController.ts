import { Request, Response } from "express";
import TokenDao from "../dao/tokenDao";


class TokenContoller extends TokenDao {

    public getUUID(req: Request, res: Response): void {
        const codUsuario = String(req.body.userData.id);
        TokenContoller.queryUUID(res, codUsuario);
    }

}

const tokenController = new TokenContoller();
export default tokenController;