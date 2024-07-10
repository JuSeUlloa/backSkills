import User from "./user";


export class Input {
    public _id?: string;
    public dateInput: Date;
    public codAccess: User;

    constructor(date: Date, codU: User) {
        this.dateInput = date;
        this.codAccess = codU;
    }

}