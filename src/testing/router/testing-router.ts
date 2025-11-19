import {Router, Request, Response} from "express";
import {basicAuthMiddleware} from "../../auth/middlewares/basicAuthMiddleware";
import {db} from "../../db/in-memory.db";


export const testingRouter = Router({});

testingRouter.delete('/all-data', (req: Request, res: Response) => {
    db.blogs = [];
    res.sendStatus(204);
});