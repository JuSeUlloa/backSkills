import { Router } from "express";
import registerController from "../controller/registerContoller";

class RegisterRouter {

    public apiRouteRegister: Router;

    constructor() {
        this.apiRouteRegister = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteRegister.post("/user", registerController.registerUser);
        this.apiRouteRegister.post("/emailCheck", registerController.verify);
    }

}

const registerRouter = new RegisterRouter();
export default registerRouter.apiRouteRegister;