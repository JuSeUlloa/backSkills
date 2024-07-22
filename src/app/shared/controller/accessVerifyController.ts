import fs from 'fs';
import AccessResponse from '../../schemas/accessResponse';
import pathImages from '../../../config/domain/var_images';
import jwt from 'jsonwebtoken';
import ManageImage from '../../../config/utilities/functions/manageImage';
import { Access } from '../../models/access';

class AccessVerifyController {

    public static generateToken(dataSesion: any, objAccess: Access): AccessResponse {
        let base64 = "";
        const privateImageName = dataSesion.privatePhotoUser;

        let systemPath = pathImages.defaultPhoto;
        let privatePathImage = pathImages.pathUserPhotos + privateImageName;

        const payload = {
            id: dataSesion._id,
            codRole: dataSesion.codRole._id,
            nameRole: dataSesion.codRole.nameRole,
            uuidAccess: objAccess.uuidAccess,
            emailAccess: objAccess.emailAccess,
            nameUser:dataSesion.nameUser,
            lastNameUser: dataSesion.nameUser,
        }

        let password = 'f5e83d2ffba8d065b130701c37ad171aaae1f2a1cad231ab12e0486e4d5e686d987ee95646baf199842559c2e3aee8af45ef22d18452e7760daafc83bb3839db';
        const token = jwt.sign(payload, password, { expiresIn: '8h' });

        if (fs.existsSync(privatePathImage)) {
            const rutaMiniatura = pathImages.pathTemporalPhotos + privateImageName;
            ManageImage.generateMiniature(privatePathImage, rutaMiniatura, 150);
            base64 = fs.readFileSync(rutaMiniatura, 'base64');
            fs.unlinkSync(rutaMiniatura);
        } else {
            base64 = fs.readFileSync(systemPath, 'base64');
        }
        return new AccessResponse(token, base64);


    }

}

export default AccessVerifyController;