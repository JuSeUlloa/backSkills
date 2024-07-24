import { Response } from "express";
import Type from "../../models/type";
import typeSchema from "../../schemas/typeSchema";


class TypeDao {

    protected static async addType(res: Response, objType: Type): Promise<any> {
        typeSchema.create(objType)
            .then((response) => {
                res.status(200).json({ message: "Inset Type", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register Type" });
            })
    }

    protected static async getAll(res: Response): Promise<any> {
        typeSchema.find().then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load data" })
        })
    }

    protected static async getOne(res: Response, codType: string): Promise<any> {
        typeSchema.findById(codType).then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json({ message: "Failed to load type" })
        })
    }

    protected static async update(res: Response, codType: string, objType: Type): Promise<any> {
        typeSchema.findByIdAndUpdate(codType, { $set: { nameType: objType.nameType, descriptionType: objType.descriptionType } }).then((response) => {
            res.status(200).json({ messaje: "Update type", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update type" })
        })
    }

    protected static async state(res: Response, codType: string, state: number): Promise<any> {
        typeSchema.findByIdAndUpdate(codType, { $set: { stateType: state } }).then((response) => {
            res.status(200).json({ messaje: "updtae state", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update state" })
        })
    }

    protected static async delete(res: Response, codType: string): Promise<any> {
        typeSchema.findByIdAndDelete(codType).then((response) => {
            res.status(200).json({ messaje: "Delete type", response: response });
        }).catch((err) => {
            res.status(400).json({ message: "Failed to update state" })
        })
    }


}

export default TypeDao;

