import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";

export const updatePostHandler = (req: Request, res: Response) => {
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
}