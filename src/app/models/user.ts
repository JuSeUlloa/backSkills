import Role from "./role";

class User {
    public _id?:any |string;
    public nameUser: string;
    public codRole: Role;
    public lastNameUser: string;
    public telephoneUser: string;
    public publicPhotoUser: string;
    public privatePhotoUser: string;
    public stateUser: number;
    public auditLogUser: object;

    constructor(name: string, codR: Role, last: string, tele: string, pub: string, pri: string, stat: number, aud: object) {
        this.nameUser = name;
        this.codRole = codR;
        this.lastNameUser = last;
        this.telephoneUser = tele;
        this.publicPhotoUser = pub;
        this.privatePhotoUser = pri;
        this.stateUser = stat;
        this.auditLogUser = aud;

    }

}

export default User;
