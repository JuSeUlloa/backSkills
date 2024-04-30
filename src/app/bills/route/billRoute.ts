import { Router } from "express";
import billController from "../controller/billController";


class BillRoute {
    public apiRouteBill: Router;


    constructor() {
        this.apiRouteBill = Router();
        this.loadRoutes();
    }

    private loadRoutes(): void {
        this.apiRouteBill.get('/all', billController.getBills);
        this.apiRouteBill.post('/add', billController.insertBill);
    }
}

const billRoute = new BillRoute();
export default billRoute.apiRouteBill;