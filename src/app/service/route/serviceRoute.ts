import { Router } from "express";
import serviceController from "../controller/serviceController";


class ServiceRoute {
    public apiServiceRoute: Router;


    constructor() {
        this.apiServiceRoute = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiServiceRoute.get("/all", serviceController.getAllservices);
        this.apiServiceRoute.get("/one/:codservice", serviceController.getservice);
        this.apiServiceRoute.post("/add", serviceController.createservice);
        this.apiServiceRoute.put("/update", serviceController.updateservice);
        this.apiServiceRoute.delete("/state/:codservice/:state", serviceController.deleteservice);
        this.apiServiceRoute.delete("/delete/:codservice", serviceController.deleteservice);
    }

}
const serviceRoute = new ServiceRoute();
export default serviceRoute.apiServiceRoute;