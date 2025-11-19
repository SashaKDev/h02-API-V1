import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";
import {Post} from "../../types/post";
import {blogsRepository} from "../../../blogs/repositories/blogsRepository";
import {postsRepository} from "../../repositories/postsRepository";

export const createPostHandler = (req: Request, res: Response) => {
    const foundBlog = blogsRepository.findById(req.body.blogId);
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
    postsRepository.create(newPost);
    res
        .status(201)
        .json(newPost);
}