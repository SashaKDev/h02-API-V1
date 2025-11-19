import {Request, Response} from "express";
import {db} from "../../../db/in-memory.db";

export const updateBlogHandler = (req: Request, res: Response) => {
    const foundBlog = db.blogs.find(blog => blog.id === req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    foundBlog.name = req.body.name;
    foundBlog.description = req.body.description;
    foundBlog.websiteUrl = req.body.websiteUrl;
    res.sendStatus(204);
}