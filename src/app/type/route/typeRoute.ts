import { Router } from "express";
import typeController from "../controller/typeController";


class TypeRoute {
    public apiTypeRoute: Router;


    constructor() {
        this.apiTypeRoute = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiTypeRoute.get("/all", typeController.getAllTypes);
        this.apiTypeRoute.get("/one/:codType", typeController.getType);
        this.apiTypeRoute.post("/add", typeController.createType);
        this.apiTypeRoute.put("/update", typeController.updateType);
        this.apiTypeRoute.delete("/state/:codType/:state", typeController.deleteType);
        this.apiTypeRoute.delete("/delete/:codType", typeController.deleteType);
    }

}
const typeRoute = new TypeRoute();
export default typeRoute.apiTypeRoute;