import { model, Schema, Types } from "mongoose";
import Bill from "../models/bill";

const BillSchema = new Schema<Bill>(
    {
        nameBill: { type: String, required: true },
        descriptionBill: { type: String, required: true },
        valueBill: { type: Number, required: true },
        dateBill: { type: Date, required: true },
        codCategory: { type: Types.ObjectId, ref: "Category", required: true }
    },
);

export default model("Bill", BillSchema, "Bill");
