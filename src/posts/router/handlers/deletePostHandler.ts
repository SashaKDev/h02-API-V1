import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";
import {postsRepository} from "../../repositories/postsRepository";

export const deletePostHandler = (req: Request, res: Response) => {
    const foundPost = postsRepository.findById(req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }

    postsRepository.delete(foundPost.id);
    res.sendStatus(204);
}