const http = require("http");

const server = http.createServer((req, resp) => {
    resp.end("Probando servidor");
});

console.log("Iniciando servidor....");
server.listen(3000);