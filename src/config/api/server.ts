import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connexionDB from "../connexion/connexionDB";

import billRoute from '../../app/bills/route/billRoute';
import categoryRoute from '../../app/category/route/categoryRoute';
import accessRoute from '../../app/access/route/accessRoute';
import registerRoute from '../../app/register/route/registerRoute';


import roleRoute from '../../app/role/route/roleRoute';
import userRoute from '../../app/user/route/userRoute';
import security from "../../middleware/security";
import typeRoute from "../../app/type/route/typeRoute";
import serviceRoute from "../../app/service/route/serviceRoute";



class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        dotenv.config({ path: ".env" });
        connexionDB();
        this.startServer();
        this.routesActivate();
    }

    public startServer(): void {
        this.app.set("PORT", process.env.PORT);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({ limit: "100mb" }));
        this.app.use(
            express.urlencoded({
                extended: true,
            })
        );
    }

    public routesActivate(): void {
        /* Public Routes */
        this.app.use("/api/public/bill", billRoute);
        this.app.use("/api/public/access", accessRoute);
        this.app.use("/api/public/register", registerRoute);
        this.app.use("/api/public/category", categoryRoute);
        /* Private routes */

        this.app.use("/api/private/inclock", security.verifyToken, accessRoute);
        this.app.use("/api/private/role", roleRoute);
        this.app.use("/api/private/user", userRoute);
        this.app.use("/api/private/type", security.verifyToken, typeRoute);
        this.app.use("/api/private/service", security.verifyToken, serviceRoute);

    }

    public listenServer(): void {
        this.app.listen(this.app.get("PORT"), () => {
            const port = this.app.get("PORT");
            console.log("local server runing to " + port);
        });
    }
}

export default Server;
