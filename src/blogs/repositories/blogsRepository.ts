import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";
import {BlogInputDto} from "../dto/blog-input.dto";


export const blogsRepository = {
    findAll(): Blog[] {
        return db.blogs
    },

    findById(id: string): Blog | null {
        return db.blogs.find(blog => blog.id === id) ?? null;
    },

    create(blog: Blog) {
        db.blogs.push(blog);
    },

    update(id: string, dto: BlogInputDto) {
        const foundBlog = db.blogs.find(blog => blog.id === id);
        if (foundBlog) {
            foundBlog.name = dto.name;
            foundBlog.description = dto.description;
            foundBlog.websiteUrl = dto.websiteUrl;
        }
    },

    delete(id: string) {
        db.blogs = db.blogs.filter(blog => blog.id !== id);
    }
}