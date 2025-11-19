import {Request, Response} from "express";
import {postsRepository} from "../../repositories/postsRepository";

export const getAllPostsHandler = (req: Request, res: Response) => {
    const foundPosts = postsRepository.findAll();
    res
        .status(200)
        .json(foundPosts);
}