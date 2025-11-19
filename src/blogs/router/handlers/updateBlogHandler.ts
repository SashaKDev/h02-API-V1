import {Request, Response} from "express";
import {blogsRepository} from "../../repositories/blogsRepository";
import {BlogInputDto} from "../../dto/blog-input.dto";

export const updateBlogHandler = (req: Request, res: Response) => {
    const foundBlog = blogsRepository.findById(req.params.id);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    const dto: BlogInputDto = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    }
    blogsRepository.update(req.params.id, dto);
    res.sendStatus(204);
}