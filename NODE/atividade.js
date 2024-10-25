const http = require('http');
const port = 9090;
const livros = require('./livros.js');

const servidor = http.createServer((requisicao, resposta) => {
    // todas as validações devem ser feitas aqui

    // testar a requisicao.url e retornar o objeto correspondente
    // crie um servidor que na url / vai retornar um objeto com seu nome e a versão da aplicacao e o nome 'api de livros'
    if(requisicao.url === '/'){
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.write(JSON.stringify({autor: 'Káthia', versão: '1.0.0', aplicacao: 'API LIVROS'}));
        resposta.end();
    }
    else if(requisicao.url === '/livros'){
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.write(JSON.stringify(livros));
        resposta.end();
    }
     // na url /livros/1 vai retornar um objeto com o titulo, autor e ano,preco do primeiro livro da lista
    else if(requisicao.url === '/livros/1'){    
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.write(JSON.stringify(livros[0]));
        resposta.end();
    }
    else{
        resposta.writeHead(404, { 'Content-Type': 'text/html' });
        resposta.write('Recurso indisponivel');
        resposta.end();
    }

   
}).listen(port)



