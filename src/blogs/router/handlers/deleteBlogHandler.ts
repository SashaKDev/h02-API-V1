import {Request, Response} from "express";
import {blogsRepository} from "../../repositories/blogsRepository";

export const deleteBlogHandler = (req: Request, res: Response) => {
    const foundBlog = blogsRepository.findById(req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    blogsRepository.delete(req.params.id);
    res.sendStatus(204);
}