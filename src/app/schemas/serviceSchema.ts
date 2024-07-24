import { Schema, Types, model } from "mongoose";
import Service from "../models/service";

const ServiceSchema = new Schema<Service>(
    {
        clientService: { type: String, required: true },
        startDateService: { type: Date, required: true },
        endDateService: { type: Date, required: true },
        costService: { type: Number, required: true },
        stateService: { type: Number, required: true, default: 1 },
        codType: { type: Types.ObjectId, ref: "Type", required: true }
    }
)

export default model("Service", ServiceSchema, "Service");