import { Request, Response } from "express";
import service from "../../models/service";
import serviceDao from "../../service/dao/serviceDao";
class ServiceController extends serviceDao {

    public getAllservices(req: Request, res: Response): void {
        ServiceController.getAll(res);
    }

    public getservice(req: Request, res: Response): void {
        const codservice = String(req.params.codservice);
        if (codservice !== undefined) {
            ServiceController.getOne(res, codservice);
        } else {
            res.status(400).json({ messaje: "Code service invalid" })
        }
    }

    public createservice(req: Request, res: Response): void {
        const objservice: service = req.body;
        ServiceController.addService(res, objservice);

    }

    public updateservice(req: Request, res: Response): void {
        delete req.body.userData;
        const objservice: service = req.body;
        const codservice: string = req.body._id;
        ServiceController.update(res, codservice, objservice);
    }

    public stateservice(req: Request, res: Response): void {
        const codservice = String(req.params.codservice);
        const state = Number(req.params.stateservice);
        if (codservice !== undefined && !isNaN(state)) {
            if (state == 1) {
                ServiceController.state(res, codservice, 2);
            } else {
                ServiceController.state(res, codservice, 1);
            }
        } else {
            res.status(400).json({ messaje: "Code service invalid" })
        }
    }

    public deleteservice(req: Request, res: Response): void {
        const codservice = String(req.params.codservice);
        if (codservice !== undefined) {
            ServiceController.delete(res, codservice);
        } else {
            res.status(400).json({ messaje: "Code service invalid" })
        }
    }
}

const serviceController = new ServiceController();
export default serviceController;