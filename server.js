const http = require('node:http');

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Comunidade FabianoFaia</title>
  </head>
  <body>
    <main>
      <h1>Comunidade FabianoFaia</h1>
      <p>O site está no ar.</p>
    </main>
  </body>
</html>`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
