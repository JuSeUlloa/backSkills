import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Security {
    public verifyToken(req: Request, res: Response, next: NextFunction): any {
        if (!req.headers.authorization) {
            res.status(401).json({
                Respuesta: "Petición negada por el sistema de seguridad",
            });
        } else {
            try {
                const token = req.headers.authorization?.split(" ")[1] as string;
                const data = jwt.verify(token, "f5e83d2ffba8d065b130701c37ad171aaae1f2a1cad231ab12e0486e4d5e686d987ee95646baf199842559c2e3aee8af45ef22d18452e7760daafc83bb3839db");
                req.body.userData = data;
                next();
            } catch (error) {
                res.status(401).json({
                    Respuesta: "Token no valido",
                });
            }
        }
    }
}
const security = new Security();
export default security;
