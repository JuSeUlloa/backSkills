import Type from "./type";

class Service {

    public _id?: string;
    public codType: Type;
    public clientService: string;
    public startDateService: Date;
    public endDateService: Date;
    public costService: number;
    public stateService: number;

    constructor(cod: Type, clie: string, start: Date, end: Date, cos: number, stat: number) {
        this.codType = cod;
        this.clientService = clie;
        this.startDateService = start;
        this.endDateService = end;
        this.costService = cos;
        this.stateService = stat;
    }

}
export default Service;