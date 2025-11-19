import {Request, Response} from "express";
import {db} from "../../../db/in-memory.db";

export const deleteBlogHandler = (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    db.blogs = db.blogs.filter(blog => blog.id !== req.params.id);
    res.sendStatus(204);
}