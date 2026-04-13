const userRepository = require('../repositories/userRepository');

async function getAllUsers(req, res){
    try{
       const users = await userRepository.getAllUsers();

        return res.status(200).json({'msg': users})
    }catch(e){
        console.log(e);
        
    }
}

async function getUserById(req, res){
    try{
       const user = await userRepository.getUserById(req.params.id);

        return res.status(200).json({user})
    }catch(e){
        console.log(e);
        
    }
}

async function registerUser(req, res){
    try{
       const user = await userRepository.registerUser(req.body);

        return res.status(201).json({user})
    }catch(e){
        console.log(e);
        
    }
}

async function updateUser(req, res){
    if (!req.body){
        return res.status(400).json({error: "Insira ao menos um atributo para atualização"});
    }

    const user = await userRepository.updateUser(req.params.id, req.body);

    if (!user){
        return res.status(404).json({error: "Carro não encontrado"});
    }

    res.json(user);
}

async function deleteUserById(req, res){
    await userRepository.deleteUserById(req.params.id);

    return res.json({'msg': 'Usuário deletado com sucesso'});
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUserById
};