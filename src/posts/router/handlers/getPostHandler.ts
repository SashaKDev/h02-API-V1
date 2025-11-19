import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";
import {postsRepository} from "../../repositories/postsRepository";

export const getPostHandler = (req: Request, res: Response) => {
    const foundPost = postsRepository.findById(req.params.id);
    if (!foundPost) {
        res.sendStatus(404);
    }
    res
        .status(200)
        .json(foundPost);
}