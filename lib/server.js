var express = require('express');
var http = require('http');

// Exportando os componentes principais
// assim podemos usar o Socket.io mais tarde se precisar
exports.app = express();
exports.http = http.Server(exports.app);
