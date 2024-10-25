const http = require('http');
const port = 8080;
const somar = require('./somar.js');
// 127.0.0.1:8080
console.log("Hello, World!");

http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, { 'Content-Type': 'text/html' });
    resposta.write('<h1>Ola Mundo! Esse eh meu primeiro programa em Node.js </h1>');
    resposta.end();
}).listen(port)

somar(1, 2)