import {param} from 'express-validator';

export const idValidation = param('id')
    .isString()
    .withMessage('Must be string')
    .isNumeric()
    .withMessage('id must be a number');