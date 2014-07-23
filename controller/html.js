// Esse controlador é responsável por enviar os HTMLs para as páginas
// que precisam de HTML
var app = require('../lib/server').app;

// Quando alguém acessar a página inicial
app.get('/', function(req, res, next){
    res.sendfile('template/index.html');
});
