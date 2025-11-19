import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";

export const getPostHandler = (req: Request, res: Response) => {
    const foundPost = db.posts.find(post => post.id === req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
    }
    res
        .status(200)
        .json(foundPost);
}