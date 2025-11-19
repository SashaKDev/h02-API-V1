import {Request, Response} from 'express';
import {db} from "../../../db/in-memory.db";
import {blogsRepository} from "../../repositories/blogsRepository";

export const getAllBlogsHandler = (req: Request, res: Response) => {
    const allBlogs = blogsRepository.findAll()
    res
        .status(200)
        .json(allBlogs);
}