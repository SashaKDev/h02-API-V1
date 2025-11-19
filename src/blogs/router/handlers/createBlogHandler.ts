import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";
import {Blog} from "../../types/blog";

export const createBlogHandler = (req: Request, res: Response) => {
    const newBlog: Blog = {
        id: (db.blogs.length + 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    }

    db.blogs.push(newBlog);

    res
        .status(201)
        .json(newBlog)
}