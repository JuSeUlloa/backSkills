import { Router } from "express";
import userController from "../controller/userController";

class UserRoute {
    public apiRouteUser: Router;

    constructor() {
        this.apiRouteUser = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteUser.get("/all", userController.allusers);
    }
}

const userRoute = new UserRoute();
export default userRoute.apiRouteUser;