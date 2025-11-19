import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";


export const inputValidationResult = (req: Request, res: Response, next: NextFunction) => {

    const formatErrors = () => {

    }

    const errors = validationResult(req).formatWith((error) => {error.msg}).array()

    if (errors.length) {
        res.status(400).json(errors);
    }
    next();
}