import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";

export const deletePostHandler = (req: Request, res: Response) => {
    const foundPost = db.posts.find(post => post.id === req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }

    db.posts = db.posts.filter(post => post.id !== req.params.id)
    res.sendStatus(204);
}