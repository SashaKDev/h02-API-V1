import {NextFunction, Request, Response} from "express";
import {FieldValidationError, validationResult} from "express-validator";


export const inputValidationResult = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req).array() as FieldValidationError[];


    if (errors.length) {
        res.status(400).json({message: errors[0].msg, field: errors[0].path});
    }
    next();
}