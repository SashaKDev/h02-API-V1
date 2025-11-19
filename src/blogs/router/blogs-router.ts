import {Router} from "express";
import {blogsInputDtoValidation} from "../validation/blogsInputDtoValidation";
import {inputValidationResult} from "../../core/middlewares/validation/inputValidationResult";
import {basicAuthMiddleware} from "../../auth/middlewares/basicAuthMiddleware";
import {idValidation} from "../../core/middlewares/validation/paramValidation";
import {deleteBlogHandler} from "./handlers/deleteBlogHandler";
import {updateBlogHandler} from "./handlers/updateBlogHandler";
import {createBlogHandler} from "./handlers/createBlogHandler";
import {getBlogHandler} from "./handlers/getBlogHandler";
import {getAllBlogsHandler} from "./handlers/getAllBlogsHandler";

export const blogsRouter = Router({});

blogsRouter.get('/', getAllBlogsHandler);

blogsRouter.get('/:id',
    idValidation,
    inputValidationResult,
    getBlogHandler);

blogsRouter.post('/',
    basicAuthMiddleware,
    blogsInputDtoValidation,
    inputValidationResult,
    createBlogHandler
);

blogsRouter.put('/:id',
    basicAuthMiddleware,
    idValidation,
    blogsInputDtoValidation,
    inputValidationResult,
    updateBlogHandler
);

blogsRouter.delete('/:id',
    basicAuthMiddleware,
    idValidation,
    inputValidationResult,
    deleteBlogHandler
);