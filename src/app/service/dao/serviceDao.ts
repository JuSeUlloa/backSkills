import { Response } from "express";
import Service from "../../models/service";
import serviceSchema from "../../schemas/serviceSchema";


class ServiceDao {

    protected static async addService(res: Response, objService: Service): Promise<any> {
        serviceSchema.create(objService)
            .then((response) => {
                res.status(200).json({ message: "Insert Service", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register Service" });
            })
    }

    protected static async getAll(res: Response): Promise<any> {
        serviceSchema.find().then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load data" })
        })
    }

    protected static async getOne(res: Response, codService: string): Promise<any> {
        serviceSchema.findById(codService).then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load Service" })
        })
    }

    protected static async update(res: Response, codService: string, objService: Service): Promise<any> {
        serviceSchema.findByIdAndUpdate(codService, {
            $set: {
                clientService: objService.clientService, startDateService: objService.startDateService,
                endDateService: objService.endDateService, costService: objService.costService, codType: objService.codType
            }
        }).then((response) => {
            res.status(200).json({ messaje: "Update Service", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update Service" })
        })
    }

    protected static async state(res: Response, codService: string, state: number): Promise<any> {
        serviceSchema.findByIdAndUpdate(codService, { $set: { stateService: state } }).then((response) => {
            res.status(200).json({ messaje: "updtae state", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update state" })
        })
    }

    protected static async delete(res: Response, codService: string): Promise<any> {
        serviceSchema.findByIdAndDelete(codService).then((response) => {
            res.status(200).json({ messaje: "Delete Service", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update state" })
        })
    }


}

export default ServiceDao;

