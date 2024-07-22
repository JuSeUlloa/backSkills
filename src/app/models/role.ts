class Role {
    public _id?: any | string;
    public nameRole?: string;
    public stateRole?: number;
    public auditLogRole?: object;

    constructor(name: string, stat: number, aud: object) {
        this.nameRole = name;
        this.stateRole = stat;
        this.auditLogRole = aud;
    }

}

export default Role;
