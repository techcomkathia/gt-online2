const http= require('http')
const port = 8090
const objeto = require('./objeto.js')

const servidor = http.createServer((requisicao, resposta) => {
    if(requisicao.url === '/'){
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.write(JSON.stringify({autor: 'Káthia', versão: '1.0.0'}));
        resposta.end();
    }
    else if(requisicao.url === '/objeto'){
        resposta.writeHead(200, { 'Content-Type': 'application/json' });
        resposta.write(JSON.stringify(objeto));
        resposta.end();
    }
    else{
        resposta.writeHead(404, { 'Content-Type': 'text/html' });
        resposta.write('Recurso indisponivel');
        resposta.end();
    }

}).listen(port)

// js assincrono
// resposta.JSON() 
// método para promessas JSON/OBJTO

// OBJETO para converter para JSON
// JSON.stringify(objeto)
// OBJETO convertendo para JSON