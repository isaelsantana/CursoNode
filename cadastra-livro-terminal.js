var http = require('http');

var configuracao = {
    hostname: 'localhost',
    port: '3000',
    path: '/produtos',
    method:'post' , 
    headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'

    }
};

var client= http.request(configuracao, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo' + body);
    });

});


var livro = {
    nome:'',
    descricao : 'teste Descrição Json'
};

client.end(JSON.stringify(livro));