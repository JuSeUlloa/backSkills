import { Router } from "express";
import roleController from "../controller/roleController";

class RoleRoute {
    public apiRouteRole: Router;

    constructor() {
        this.apiRouteRole = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteRole.get("/all", roleController.allRoles);
    }
}

const roleRoute = new RoleRoute();
export default roleRoute.apiRouteRole;