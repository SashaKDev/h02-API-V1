import {Router, Request, Response} from "express";
import {db} from "../../db/in-memory.db";
import {basicAuthMiddleware} from "../../auth/middlewares/basicAuthMiddleware";
import {postInputDtoValidation} from "../validation/postInputDtoValidation";
import {inputValidationResult} from "../../core/middlewares/validation/inputValidationResult";
import {Post} from "../types/post";
import {idValidation} from "../../core/middlewares/validation/paramValidation";

export const postsRouter = Router({});

postsRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(db.posts);
});

postsRouter.get('/:id', (req: Request, res: Response) => {
    const foundPost = db.posts.find(post => post.id === req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
    }
    res.status(200).json(foundPost);
});

postsRouter.post('/', basicAuthMiddleware, postInputDtoValidation, inputValidationResult, (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.body.blogId);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    const newPost: Post = {
        id: (db.posts.length + 1).toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: foundBlog.name
    }
    res.status(201).json(newPost);
});

postsRouter.put('/:id', basicAuthMiddleware, idValidation, postInputDtoValidation, inputValidationResult, (req: Request, res: Response) => {
    const foundPost = db.posts.find(post => post.id === req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }
    const foundBlog = db.blogs.find(blog => blog.id === req.body.blogId);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    foundPost.title = req.body.title;
    foundPost.shortDescription = req.body.shortDescription;
    foundPost.content = req.body.content;
    foundPost.blogId = req.body.blogId;
    foundPost.blogName = foundBlog.name


    res.sendStatus(204);
});

postsRouter.delete('/:id', basicAuthMiddleware, idValidation,inputValidationResult, (req: Request, res: Response) => {
    const foundPost = db.posts.find(post => post.id === req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }

    db.posts = db.posts.filter(post => post.id !== req.params.id)
    res.sendStatus(204);
})