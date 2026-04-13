const postRepository = require('../repositories/postRepository');

// listar todos os posts
async function listPosts(req, res){
    const posts = await postRepository.getAllPosts();
    res.json(posts);
}

// buscar post específico
async function getPost(req, res){
    const post = await postRepository.getPostById(req.params.id);

    if (!post){
        return res.status(404).json({error: "Post não encontrado"});
    }

    res.json(post);
}

// criar post
async function createPost(req, res){
    const post = await postRepository.createPost(req.body);

    if (!post){
        return res.status(400).json({error: "userId e content são obrigatórios"});
    }

    res.json(post);
}

// atualizar post
async function updatePost(req, res){
    if (!req.body){
        return res.status(400).json({error: "Insira ao menos um atributo para atualização"});
    }

    const post = await postRepository.updatePost(req.params.id, req.body);

    if (!post){
        return res.status(404).json({error: "Post não encontrado"});
    }

    res.json(post);
}

// deletar post
async function deletePost(req, res){
    const post = await postRepository.deletePost(req.params.id);

    if (!post){
        return res.status(404).json({error: "Post não encontrado"});
    }

    res.json({message: post});
}

module.exports = {
    listPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};