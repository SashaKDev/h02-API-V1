import {Post} from "../types/post";
import {db} from "../../db/in-memory.db";
import {PostInputDto} from "../dto/post-input.dto";


export const postsRepository = {
    findAll(): Post[]{
        return db.posts;
    },

    findById(id: string): Post | null{
        return db.posts.find(post => post.id === id) ?? null
    },

    create(post: Post) {
        db.posts.push(post);
    },

    update(id: string, dto: PostInputDto) {
        const foundPost = db.posts.find(post => post.id === id);
        const foundBlog = db.blogs.find(blog => blog.id === dto.blogId);
        if (foundPost && foundBlog) {
            foundPost.title = dto.title;
            foundPost.shortDescription = dto.shortDescription;
            foundPost.content = dto.content;
            foundPost.blogId = dto.blogId;
            foundPost.blogName = foundBlog.name;
        }
    }
};