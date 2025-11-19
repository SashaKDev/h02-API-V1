import {Request, Response} from 'express';
import {postsRepository} from "../../repositories/postsRepository";
import {blogsRepository} from "../../../blogs/repositories/blogsRepository";
import {PostInputDto} from "../../dto/post-input.dto";

export const updatePostHandler = (req: Request, res: Response) => {
    const foundPost = postsRepository.findById(req.body.blogId);
    if (!foundPost) {
        res.sendStatus(404);
        return;
    }
    const foundBlog = blogsRepository.findById(req.params.blogId);
    if (!foundBlog) {
        res.sendStatus(404);
        return;
    }
    const dto: PostInputDto = {
        title: req.body.title,
        shortDescription:req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
    }

    postsRepository.update(req.params.id, dto);

    res.sendStatus(204);
}