class AccessResponse {
    protected systemToken: string;
    protected systemPhoto: string;
    protected sesionKey?: string;

    constructor(tok: string, fot: string) {
        this.systemToken = tok;
        this.systemPhoto = fot;
    }
}
export default AccessResponse;