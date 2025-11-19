import {Request, Response} from 'express';
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