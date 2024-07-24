import { Request, Response } from "express";
import TypeDao from "../dao/typeDao";
import Type from "../../models/type";

class TypeController extends TypeDao {

    public getAllTypes(req: Request, res: Response): void {
        TypeController.getAll(res);
    }

    public getType(req: Request, res: Response): void {
        const codType = String(req.params.codType);
        if (codType !== undefined) {
            TypeController.getOne(res, codType);
        } else {
            res.status(400).json({ messaje: "Code type invalid" })
        }
    }

    public createType(req: Request, res: Response): void {
        const objType: Type = req.body;
        TypeController.addType(res, objType);

    }

    public updateType(req: Request, res: Response): void {
        delete req.body.userData;
        const objType: Type = req.body;
        const codType: string = req.body._id;
        TypeController.update(res, codType, objType);
    }

    public stateType(req: Request, res: Response): void {
        const codType = String(req.params.codType);
        const state = Number(req.params.stateType);
        if (codType !== undefined && !isNaN(state)) {
            if (state == 1) {
                TypeController.state(res, codType, 2);
            } else {
                TypeController.state(res, codType, 1);
            }
        } else {
            res.status(400).json({ messaje: "Code type invalid" })
        }
    }

    public deleteType(req: Request, res: Response): void {
        const codType = String(req.params.codType);
        if (codType !== undefined) {
            TypeController.delete(res, codType);
        } else {
            res.status(400).json({ messaje: "Code type invalid" })
        }
    }
}

const typeController = new TypeController();
export default typeController;