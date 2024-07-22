import User from "./user";

export class Access {
    public _id?: string;
    public codUser: User;
    public emailAccess: string;
    public passwordAccess: string;
    public uuidAccess:string;

    constructor(codU: User, ema: string, pass: string, uuid:string) {
        this.codUser = codU;
        this.emailAccess = ema;
        this.passwordAccess = pass;
        this.uuidAccess = uuid;
    }
}