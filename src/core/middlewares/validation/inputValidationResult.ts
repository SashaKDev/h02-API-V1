import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";


export const inputValidationResult = (req: Request, res: Response, next: NextFunction) => {

    const formatErrors = () => {

    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({message: errors.array()});
    }
    next();
}