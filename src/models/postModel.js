const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    "userId": {
        type: Number,
        required: true
    },
    "content": {
        type: String,
        required: true
    },
    "created_at":{
        type: Date,
        required: true
    }
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

