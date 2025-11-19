import {Router,Request, Response} from "express";
import {db} from "../../db/in-memory.db";
import {blogsInputDtoValidation} from "../validation/blogsInputDtoValidation";
import {inputValidationResult} from "../../core/middlewares/validation/inputValidationResult";
import {basicAuthMiddleware} from "../../auth/middlewares/basicAuthMiddleware";
import {Blog} from "../types/blog";
import {idValidation} from "../../core/middlewares/validation/paramValidation";

export const blogsRouter = Router({});

blogsRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(db.blogs);
});

blogsRouter.get('/:id', (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(foundBlog);
});

blogsRouter.post('/', basicAuthMiddleware, blogsInputDtoValidation, inputValidationResult, (req: Request, res: Response) => {

    const newBlog: Blog = {
        id: (db.blogs.length + 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    }

    db.blogs.push(newBlog);

    res.status(201).json(newBlog);
});

blogsRouter.put('/:id', basicAuthMiddleware, idValidation, blogsInputDtoValidation, inputValidationResult,  (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    foundBlog.name = req.body.name;
    foundBlog.description = req.body.description;
    foundBlog.websiteUrl = req.body.websiteUrl;
    res.sendStatus(204);
});

blogsRouter.delete('/:id', basicAuthMiddleware, idValidation, inputValidationResult, (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    db.blogs.filter(blog => blog.id !== req.params.id);
    res.sendStatus(204);
})