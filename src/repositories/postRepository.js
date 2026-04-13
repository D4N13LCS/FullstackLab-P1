const Post = require('../models/postModel');

// listar todos os posts
async function getAllPosts(){
    try{
        return await Post.find();
    }catch(e){
        console.log(e);
        return null;
    }
}

// buscar post por id
async function getPostById(id){
    try{
        return await Post.findById(id);
    }catch(e){
        console.log(e);
        return null;
    }
}

// criar novo post
async function createPost(data){
    try{
        if (!data.userId || !data.content){
            return null;
        }

        const post = new Post({
            userId: data.userId,
            content: data.content,
            created_at: new Date()
        });

        return await post.save();
    }catch(e){
        console.log(e);
        return null;
    }
}

// atualizar post
async function updatePost(id, data){
    try{
        const post = await Post.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );

        return post;
    }catch(e){
        console.log(e);
        return null;
    }
}

// deletar post
async function deletePost(id){
    try{
        const result = await Post.findByIdAndDelete(id);

        if (!result){
            return null;
        }

        return "Post deletado com sucesso";
    }catch(e){
        console.log(e);
        return null;
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};