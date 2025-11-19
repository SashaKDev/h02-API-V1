import {param} from 'express-validator';

export const idValidation = param('id')
    .isNumeric()
    .withMessage('id must be a number');