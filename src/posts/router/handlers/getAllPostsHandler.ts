import {Request, Response} from "express";
import {db} from "../../../db/in-memory.db";
import {postsRepository} from "../../repositories/postsRepository";

export const getAllPostsHandler = (req: Request, res: Response) => {
    const foundPosts = postsRepository.findAll();
    res
        .status(200)
        .json(foundPosts);
}