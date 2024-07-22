import { Router } from "express";
import accessController from "../controller/accessController";
import tokenController from "../controller/tokenController";

class AccessRouter {

    public apiRouteAccess: Router;

    constructor() {
        this.apiRouteAccess = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteAccess.post("/signin", accessController.signin);
        this.apiRouteAccess.get("/uuid", tokenController.getUUID);
    }

}

const accessRouter = new AccessRouter();
export default accessRouter.apiRouteAccess;