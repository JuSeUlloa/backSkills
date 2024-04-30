import { Request, Response } from "express";
import BillDao from "../dao/billDao";
import Bill from "../../models/bill";


class BillController extends BillDao {

    public insertBill(req: Request, res: Response): void {
        const objBill: Bill = req.body;
        BillController.addBill(res, objBill);
    }

    public getBills(req: Request, res: Response): void {
        BillController.getAll(res);
    }

}

const billController = new BillController();
export default billController;