const mysql = require('../config/mysql').pool;
const User = require('../models/userModel');

async function getAllUsers(){
    try{
        const [result] = await mysql.query("SELECT * FROM users");
        return result.map(row => new User(row.id, row.name, row.email));
    }catch(e){
        console.log(e);
    }
}

async function getUserById(id){
    try{
        const [result] = await mysql.query("SELECT * FROM users WHERE id = ?", [id]);
        if(!result[0]){
            return null;
        }
        const user = result[0];
        return new User(user.id, user.name, user.email);
    }catch(e){
        console.log(e);
    }
}

async function registerUser({name, email}){
    try{
        if (name == null || email == null){
            return null
        }

        const [newUser] = await mysql.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
        
        return new User(newUser.insertId, name, email);
    }catch(e){
        console.log(e);
    }
}

async function updateUser(id, {name, email}) {
    const user = await getUserById(id);

    if (!user){
        return "carro não encontrado"
    }

    const fields = [];
    const values = [];

    if (name !== undefined) {
        fields.push("name = ?");
        values.push(name);
    }

    if (email !== undefined) {
        fields.push("email = ?");
        values.push(email);
    }

    values.push(id);

    const query = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;

    await mysql.query(query, values);

    return await getUserById(id);
}

async function deleteUserById(id){
    try{
        await mysql.query('DELETE FROM users WHERE id = ?', [id]);
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUserById
};