export class Type {
    public _id?: string;
    public nameType: string;
    public descriptionType: string;
    public stateType: number;

    constructor(name: string, des: string, state: number) {
        this.nameType = name;
        this.descriptionType = des;
        this.stateType = state;
    }
}

export default Type;