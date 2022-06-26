import mongoose from "mongoose";

// create schema 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String, 
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


// turn the schema into  model
const PostSchema = mongoose.model('PostSchema', postSchema);

export default PostSchema;