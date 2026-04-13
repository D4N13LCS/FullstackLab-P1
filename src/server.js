const server = require('./main');
const initializeUserTable = require('./config/mysql').initializeUserTable;
const connectMongoDB = require('./config/mongo');

const PORT = 3000

async function startServer(){
    try{
        await initializeUserTable();
        await connectMongoDB();
    }catch(e){
        console.log(e);
    }finally{
        server.listen(PORT);
        console.log(`Server listening on ${PORT}`)
    }
}

startServer();
