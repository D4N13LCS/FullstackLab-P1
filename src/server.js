const server = require('./main');

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})

