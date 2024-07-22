import fs from "fs";
import sharp from "sharp";
import deasync from "deasync";

class ManageImage {
    public static generateMiniature(privateImageName: string, miniatureImage: string, size: number): any {
        let awaitTmp = true;
        const dataSharp = sharp(privateImageName)
            .resize({ width: size })
            .toFile(miniatureImage, (noHayError) => {
                if (noHayError) {
                } else {
                    awaitTmp = false;
                }
            });
        while (awaitTmp) {
            deasync.sleep(250);
        }
        return dataSharp;
    }

    public static addImage(privateImageName: string, base64: string, storageRouteImage: string): void {
        let decodification = base64.replace(/^data:image\/\w+;base64,/, "");
        fs.readdir(storageRouteImage, (err) => {
            if (err) {
                fs.mkdirSync(storageRouteImage, { recursive: true });
            }
            fs.writeFile(storageRouteImage + privateImageName, decodification, { encoding: "base64" }, function () { });
        });
    }

    public static removeImage(nombrePrivado: string, rutaAlmacenarImagen: string): void {
        fs.unlink(rutaAlmacenarImagen + nombrePrivado, function (noEncontrada) {
            if (noEncontrada) {
                console.log("Failed delete to image");
            }
        });
    }
}

export default ManageImage;