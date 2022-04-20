const express = require("express");
const server = express();
const routes = require("./routes");

//usando o template engine
server.set('view engine', 'ejs');

//habilitar arquivos statics
server.use(express.static("public"));

// request, response 
server.use(routes);

// usar o req.body
server.use(express.urlencoded({ extended: true }));


server.listen(3000, () => console.log('rodando'))