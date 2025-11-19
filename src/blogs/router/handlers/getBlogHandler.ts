import {Request, RequestHandler, Response} from 'express';
import {db} from "../../../db/in-memory.db";

export const getBlogHandler = (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .json(foundBlog);
}