# 🚀 API Node.js com MySQL + MongoDB

Este projeto é uma API REST construída com **Node.js + Express**, utilizando **dois bancos de dados**:

* 🐬 **MySQL** → gerenciamento de usuários
* 🍃 **MongoDB** → gerenciamento de posts

A arquitetura segue um padrão organizado em camadas (Controller → Repository → Model), simulando um ambiente profissional.

---

# 📁 Estrutura do Projeto

```
├── controllers/
├── repositories/
├── models/
├── views/ (rotas)
├── config/
├── docker-compose.yml
├── app.js
```

---

# 🧠 Modelos de Dados

## 👤 User (MySQL)

```js
class User{
    constructor(id, name, email){
        this.id = id
        this.name = name;
        this.email = email;
    }
}
```

---

## 📝 Post (MongoDB)

```js
const postSchema = new mongoose.Schema({
    userId: Number,
    content: String,
    created_at: Date
});
```

---

# 🔗 Rotas da API

## 👤 Usuários (`/users`)

| Método | Rota                 | Descrição                |
| ------ | -------------------- | ------------------------ |
| GET    | `/users/`            | Listar todos os usuários |
| GET    | `/users/:id`         | Buscar usuário por ID    |
| POST   | `/users/register`    | Criar novo usuário       |
| PUT    | `/users/:id/edit`    | Atualizar usuário        |
| DELETE | `/users/:id/destroy` | Deletar usuário          |

---

## 📝 Posts (`/posts`)

| Método | Rota                 | Descrição             |
| ------ | -------------------- | --------------------- |
| GET    | `/posts/`            | Listar todos os posts |
| GET    | `/posts/:id`         | Buscar post por ID    |
| POST   | `/posts/register`    | Criar novo post       |
| PUT    | `/posts/:id/edit`    | Atualizar post        |
| DELETE | `/posts/:id/destroy` | Deletar post          |

---

# ▶️ Como rodar o projeto com Docker

## 1. Subir os containers

```bash
docker-compose up --build
```

Isso irá iniciar:

* `app` → API Node.js (porta 3000)
* `mysqldb` → MySQL (porta 3309 externa)
* `mongodb` → MongoDB (porta 27017)

---

## 2. Verificar se os containers estão rodando

```bash
docker ps
```

---

## 3. Acessar a API

Abra no navegador ou Postman:

```
http://localhost:3000/
```

Resposta esperada:

```json
{
  "msg": "Servidor está on"
}
```

---

# 🧪 Como testar os bancos de dados

## 🐬 Testando o MySQL

### Acessar o container:

```bash
docker exec -it mysqldb mysql -u root -p
```

Senha:

```
root
```

### Selecionar o banco:

```sql
USE mysqlDatabase;
```

### Ver tabelas:

```sql
SHOW TABLES;
```

### Consultar usuários:

```sql
SELECT * FROM users;
```

---

## 🍃 Testando o MongoDB

### Acessar o container:

```bash
docker exec -it mongodb mongosh
```

### Selecionar banco:

```js
use mongoDatabase
```

### Ver coleções:

```js
show collections
```

### Consultar posts:

```js
db.posts.find()
```

---

# 📬 Exemplos de Requisição

## Criar usuário

```http
POST /users/register
```

```json
{
  "name": "João",
  "email": "joao@email.com"
}
```

---

## Criar post

```http
POST /posts/register
```

```json
{
  "userId": 1,
  "content": "Meu primeiro post 🚀"
}
```

---

# ⚠️ Observações Importantes

* O `userId` nos posts deve existir no MySQL
* A aplicação utiliza dois bancos simultaneamente (arquitetura híbrida)
* O Docker garante isolamento e facilidade de execução

---

# 💡 Melhorias Futuras

* 🔐 Autenticação com JWT
* ❤️ Sistema de likes
* 💬 Comentários em posts
* 📄 Paginação de resultados
* ⚡ Cache com Redis

---

# 👨‍💻 Autor

Projeto desenvolvido para estudo de arquitetura backend com múltiplos bancos de dados.

---
