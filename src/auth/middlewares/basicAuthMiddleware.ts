import {NextFunction, Request, Response} from "express";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "qwerty";

export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers["authorization"];
    if (!auth) {
        res.sendStatus(401);
        return;
    }
    const [authType, token] = auth.split(" ");
    if (authType !== 'Basic') {
        res.sendStatus(401);
        return
    }
    const decodedAuth = atob(token);
    const [username, password] = decodedAuth.split(":");
    if(username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        res.sendStatus(401);
        return;
    }
    next();
}