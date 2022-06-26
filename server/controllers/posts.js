// import our models 
import PostSchema from '../models/postSchema.js'

export const getPosts = async (req, res) => {
    try{
        const postSchemas = await PostSchema.find()

        res.status(200).json(postSchemas);
    }catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostSchema(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}