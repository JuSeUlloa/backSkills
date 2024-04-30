import { Response } from "express";
import Bill from "../../models/bill";
import BillSchema from "../../schemas/billSchema";


class BillDao {

    protected static async addBill(res: Response, objBill: Bill): Promise<any> {
        BillSchema.create(objBill)
            .then((response) => {
                res.status(200).json({ message: "Inset Bill", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register bill" });
            })
    }

    protected static async getAll(res: Response): Promise<any> {
        BillSchema.find().then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load data" })
        })
    }


}

export default BillDao;

