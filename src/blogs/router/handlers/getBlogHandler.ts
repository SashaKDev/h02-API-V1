import {Request, Response} from 'express';
import {blogsRepository} from "../../repositories/blogsRepository";

export const getBlogHandler = (req: Request, res: Response) => {
    const foundCourse = blogsRepository.findById(req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .json(foundCourse);
}