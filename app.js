var requi = require('requi');
var server = require('./lib/server');

// Uso o require para executar todos os
// controladores
requi(__dirname + '/controller');

// Iniciamos o servidor na porta 800
server.http.listen(8080);
